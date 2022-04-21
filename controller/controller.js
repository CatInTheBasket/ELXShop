
const { ItemTransaction, Product, Profile, Transaction, User } = require("../models/index.js")
const { Op } = require("sequelize")
class Controller {

    static landingPage(req, res) {
        res.render("landingPage.ejs");
    }

    static login(req, res) {
        res.render("formLogin.ejs");
    }

    static postLogin(req, res) {
        let newUser = {
            username: req.body.username,
            password: req.body.password
        }

        User.findOne({
            where: {
                username: newUser.username,
                password: newUser.password
            }
        })
            .then(result => {
                if(!result) {
                    res.redirect("/");
                } else {
                    res.render("home.ejs", {result})
                }
            })
            .catch((err) => {
                res.send(err);
            })
    }

    static register(req, res) {
        res.render("formRegister.ejs");
    }

    static postRegister(req, res) {
        let newUser = {
            username: req.body.username,
            password: req.body.password,
            nickname: req.body.nickname,
        }

        User.create(newUser)
            .then(() => {
                console.log(req.body);
                let profile = {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    dateofbirth: req.body.dateofbirth,
                }
                return Profile.create(profile)
            })
            .then(() => {
                res.redirect("/login")
            })
            .catch((err) => {
                res.send(err);
            })
    }

    static formProduct(req, res) {
        let result;
        res.render('formProduct', { result });
    }

    static formUserAdmin(req, res) {
        res.render('formRegisterAdmin');
    }

    static sendDataProduct(req, res) {
        let { title, price, stock, category } = req.body;
        let imageURL = '';
        if (!req.files || Object.keys(req.files).length === 0) {
            console.log('No files were uploaded.');
        } else {
            console.log((new Date()).getTime())
            let sampleFile = req.files.upload_file;
            sampleFile.name = (new Date()).getTime() + "" + sampleFile.name;
            let uploadPath = __dirname + '\\uploads\\' + sampleFile.name;
            //console.log(uploadPath);
            sampleFile.mv(uploadPath, function (err) {
                if (err) {
                    res.send(err);
                } else {
                    console.log('File uploaded!')
                    imageURL = sampleFile.name;
                    Product.create({ title, price, stock, category, imageURL }).then(() => {
                        res.redirect('/products');
                    }).catch(err => {
                        console.log(err);
                        res.send(err);
                    });
                }
            })
        }
    }
    static productsAll(req, res) {
        let category = "";
        let itemdata = "";
        if (req.query.querySuccess) {
            itemdata = req.query.querySuccess;
        }
        if (req.query.cat) {
            category = req.query.cat;
        }
        Product.getProductByCategory(category).then(result => {
            res.render('product.ejs', { result, itemdata });
        }).catch(err => {
            console.log(err);
            res.send(err);
        });
    }

    static usersAll(req, res) {
        let itemdata = "";
        if (req.query.querySuccess) {
            itemdata = req.query.querySuccess;
        }
        User.findAll().then(result => {
            res.render('usersAdmin.ejs', { result, itemdata });
        }).catch(err => {
            console.log(err);
            res.send(err);
        });
    }

    static deleteProduct(req, res) {
        let id = req.params.id;
        let query = {
            where: {
                id: id
            }
        }
        let name = "";
        Product.findByPk(id).then(result => {
            name += result.title + " dengan kategori " + result.category;
            return Product.destroy(query);
        }).then(() => {
            res.redirect(`/products?querySuccess=${name} deleted`);
        }).catch(err => {
            res.send(err);
        });
    }

    static productDetail(req, res) {
        let id = req.params.id;
        Product.findByPk(id).then(result => {
            //console.log(result);
            res.render('productDetail.ejs', { result })
        }).catch(err => {
            console.log(err);
            res.send(err);
        });
    }

    static userDetail(req, res) {
        let id = req.params.id;
        User.findByPk(id).then(result => {
            res.render('userDetail.ejs', { result })
        }).catch(err => {
            console.log(err);
            res.send(err);
        });
    }

    static showEditProduct(req, res) {
        let id = req.params.id;
        Product.findByPk(id).then(result => {
            res.render('formProduct', { result });
        }).catch(err => {
            console.log(err);
            res.send(err);
        })
    }

    static doEditProduct(req, res) {
        let id = req.params.id;
        let { title, stock, price, category } = req.body;
        Product.update({ title: title, stock: stock, price: price, category: category }, { where: { id: id } }).then(result => {
            res.redirect('/products/');
        }).catch(err => {
            console.log(err);
            res.send(err);
        })
    }
}

module.exports = Controller