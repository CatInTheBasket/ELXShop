# ELXShop
Alur program:

1. Login & Register
   -User akan melakukan login dengan mengisi form username/email dan password
         username/email dan password akan dicek kevalidannya di database
             Jika valid, maka user akan diarahkan ke home berdasarkan rolenya, Admin atau User biasa
             Jika tidak valid user akan diarahkan ke form login
   -User juga bisa melakukan registrasi pada form yang berbeda, ketika dikirim ke server maka
        apabila seluruh data terisi dan valid, data akan tersimpan ke database dan user akan dialihkan ke halaman login
        jika tidak, pesan error akan ditampilkan di halaman registrasi

2. Admin
    Setelah login, halaman utama Admin adalah tabel transaksi, dengan beberapa opsi seperti
            -membuat user baru (dengan pilihan role)
            -membuat produk baru
            -melihat detail dari user

3. User biasa
    Setelah login, halaman utama dari user adalah daftar produk, daftar produk bisa difilter berdasarkan kriteria tertentu
    ,opsi lainnya adalah:
            -melihat cart/daftar produk yang sudah dipilih
            -mengkonfirmasi/membatalkan produk yang sudah dipilih
            -mengubah profil