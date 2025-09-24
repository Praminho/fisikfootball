Tugas 2:
1. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).
	Jawab: 
    a) Membuat proyek django baru 
        - Melakukan install django lalu dengan penggunakan command “python -m venv env” lalu menjalankan “env\Scripts\activate”
        - Menyiapkan dependencies
        - Melakukan konfigurasi environment variables dan proyek
        - Menyalakan server serta mematikan server jika diperlukan
    b) Mempersiapkan aplikasi dan konfigurasi model dan view
        - Membuat aplikasi “main” dalam direktori
        - Menambahkan aplikasi pada proyek
        - Menggunakan template yang telah disediakan
        - Memodifikasi variabe templatel yang sesuai dengan tujuan membuat program
    c) Menghubungkan view dan template
        - Mengkonfigurasi URL “main” dan proyek
        - Jalankan django dengan “python manage.py runserver”

2. Buatlah bagan yang berisi request client ke web aplikasi berbasis Django beserta responnya dan jelaskan pada bagan tersebut kaitan antara urls.py, views.py, models.py, dan berkas html.
Jawab: 

Klien > server > django > views > template dan model
klien - views melalui request, template melalui input, model melalui write data

Template dan model > views > django > serve > klien
Template melalui display, model melalui data ,
Views - django melalui URL
Django- klien melalui web page

3. Jelaskan peran settings.py dalam proyek Django!
Jawab: File ini berfungsi untuk melakukan konfigurasi pada proyek django. Konfigurasi yang digunakan diantaranya adalah database, template, dan lain-lain.

4. Bagaimana cara kerja migrasi database di Django?
Jawab: Migrasi di django bekerja dengan cara memberi perintah bahwa adanya perubahan di file yang ada di database melalui command “python manage.py makemigrations”. Setelah itu D=django akan melakukan perubahan dari file migration berdasarkan command sebelumnya menggunakan command “python manage.py migrate”

5. Menurut Anda, dari semua framework yang ada, mengapa framework Django dijadikan permulaan pembelajaran pengembangan perangkat lunak?
Jawab: Menurut saya, django lebih mudah dipahami karena menggunakan basic utama python. Hal ini membuat pemula setidaknya memahami lebih baik program ketimbang bahasa lain yang memiliki basis utama java. Karena saya sendiri pernah mencuri start untuk mencoba print di java namun walaupun sudah persis sama dengan yang diajarkan youtube tapi kode tersebut tidak bisa dijalankan.

6. Apakah ada feedback untuk asisten dosen tutorial 1 yang telah kamu kerjakan sebelumnya?
Jawab: Sejauh ini asdos sudah sangat dapat membantu saya dalam menyelesaikan masalah yang coba saya tanyakan.

Tugas 3:

1. Jelaskan mengapa kita memerlukan data delivery dalam pengimplementasian sebuah platform?

Data delivery dibutuhkan untuk membuat flow pengiriman informasi antar komponen aplikasi dapat berjalan dengan baik. Hal ini mencakup pengiriman yang konsisten dan aman untuk mencegah kesalahan pengiriman data. Tanpa data delivery, hasil komunikasi antar aplikasi bisa menjadi sulit diatur ataupun rentan rusak.

2. Menurutmu, mana yang lebih baik antara XML dan JSON? Mengapa JSON lebih populer dibandingkan XML?

JSON memiliki sintaks yang jauh lebih sederhana dan juga lebih fleksibel dalam menggunakan bahasa pemrograman javascript ketimbang XML. Tak hanya itu, JSON menggunakan ukuran file yang lebih kecil sehingga mempermudah transmisi data. Kekurangan JSON sendiri adalah keamanannya yang lebih rentan untuk diserang seperti virus. JSON juga hanya memiliki dokumentasi skema yang terbatas sehingga kurang fleksibel .

XML mendukung lebih banyak tipe data ketimbang JSON, contohnya seperti tanggal yang mungkin diperlukan untuk jenis web tertentu. Struktur data yang dibuat dapat lebih mudah dibaca ketimbang JSON dan juga menggunakan bahasa pemrograman yang dapat diimplementasikan ke bahasa pemrograman lainnya. Berbeda dengan JSON, XML menggunakan sintaks yang lebih rumit dan ukuran data yang lebih besar.

Menurut saya JSON lebih populer dikarenakan kemudahannya dalam penggunaan secara cepat. Dikarenakan semakin besar pengkodean maka efisiensi akan menjadi sangat penting.

3. Jelaskan fungsi dari method is_valid() pada form Django dan mengapa kita membutuhkan method tersebut?

Seperti namanya, fungsi method ini melakukan validasi yang dikirimkan pengguna. Jika data yang dikirimkan valid maka akan disimpan dan jika tidak valid maka akan langsung dihapus

4. Mengapa kita membutuhkan csrf_token saat membuat form di Django? Apa yang dapat terjadi jika kita tidak menambahkan csrf_token pada form Django? Bagaimana hal tersebut dapat dimanfaatkan oleh penyerang?

Fungsi utama csrf adalah melindungi aplikasi dari serangan situs tertentu yang menyamar contohnya pada website download online. Beberapa hal yang dapat terjadi ketika tidak menambahkan CSRF token adalah kemudahan jebolnya data karena siapapun dapat melakukan request ke POST tanpa melalui form asli. Hal tersebut dimanfaatkan oleh penyerang melalui pembuatan halaman palsu yang diakses oleh pengguna, kemudian dapat mengubah password email korban, menghapus akun, transaksi keuangan, dan lain sebagainya.

5. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).

Mempersiapkan dirketori baru untuk membuat file html baru berupa create_product dan product_detail. Selanjutnya menambahkan fungsi berupa create_product dan show_product. Fungsi lainnya berkaitan dengan XML dan juga JSON. selanjutnya melakukan routing melalui url dan mengaitkan fungsi tersebut agar bisa digunakan di main. Membuat tombol add untuk menambahkan produk yang ingin dijual. Lalu membuat direktori form.py untuk berbagai kategori yang ingin di show seperti harga. Dari model tersebut dibuat bagian “more” agar detail produk dapat lebih terlihat.

6. Apakah ada feedback untuk asisten dosen tutorial 2 yang telah kamu kerjakan sebelumnya?
Jawab: Sejauh ini asdos sudah sangat dapat membantu saya dalam menyelesaikan masalah yang coba saya tanyakan. Asdos juga sudah bisa menjawab pertanyaan yang saya tanyakan


Tugas 3:
1. Jelaskan mengapa kita memerlukan data delivery dalam pengimplementasian sebuah platform?

Data delivery dibutuhkan untuk membuat flow pengiriman informasi antar komponen aplikasi dapat berjalan dengan baik. Hal ini mencakup pengiriman yang konsisten dan aman untuk mencegah kesalahan pengiriman data. Tanpa data delivery, hasil komunikasi antar aplikasi bisa menjadi sulit diatur ataupun rentan rusak.

2. Menurutmu, mana yang lebih baik antara XML dan JSON? Mengapa JSON lebih populer dibandingkan XML?

JSON memiliki sintaks yang jauh lebih sederhana dan juga lebih fleksibel dalam menggunakan bahasa pemrograman javascript ketimbang XML. Tak hanya itu, JSON menggunakan ukuran file yang lebih kecil sehingga mempermudah transmisi data. Kekurangan JSON sendiri adalah keamanannya yang lebih rentan untuk diserang seperti virus. JSON juga hanya memiliki dokumentasi skema yang terbatas sehingga kurang fleksibel .

XML mendukung lebih banyak tipe data ketimbang JSON, contohnya seperti tanggal yang mungkin diperlukan untuk jenis web tertentu. Struktur data yang dibuat dapat lebih mudah dibaca ketimbang JSON dan juga menggunakan bahasa pemrograman yang dapat diimplementasikan ke bahasa pemrograman lainnya. Berbeda dengan JSON, XML menggunakan sintaks yang lebih rumit dan ukuran data yang lebih besar.

Menurut saya JSON lebih populer dikarenakan kemudahannya dalam penggunaan secara cepat. Dikarenakan semakin besar pengkodean maka efisiensi akan menjadi sangat penting.

3. Jelaskan fungsi dari method is_valid() pada form Django dan mengapa kita membutuhkan method tersebut?

Seperti namanya, fungsi method ini melakukan validasi yang dikirimkan pengguna. Jika data yang dikirimkan valid maka akan disimpan dan jika tidak valid maka akan langsung dihapus

4. Mengapa kita membutuhkan csrf_token saat membuat form di Django? Apa yang dapat terjadi jika kita tidak menambahkan csrf_token pada form Django? Bagaimana hal tersebut dapat dimanfaatkan oleh penyerang?

Fungsi utama csrf adalah melindungi aplikasi dari serangan situs tertentu yang menyamar contohnya pada website download online. Beberapa hal yang dapat terjadi ketika tidak menambahkan CSRF token adalah kemudahan jebolnya data karena siapapun dapat melakukan request ke POST tanpa melalui form asli. Hal tersebut dimanfaatkan oleh penyerang melalui pembuatan halaman palsu yang diakses oleh pengguna, kemudian dapat mengubah password email korban, menghapus akun, transaksi keuangan, dan lain sebagainya.

5.  Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).

Mempersiapkan dirketori baru untuk membuat file html baru berupa create_product dan product_detail. Selanjutnya menambahkan fungsi berupa create_product dan show_product. Fungsi lainnya berkaitan dengan XML dan juga JSON. selanjutnya melakukan routing melalui url dan mengaitkan fungsi tersebut agar bisa digunakan di main. Membuat tombol add untuk menambahkan produk yang ingin dijual. Lalu membuat direktori form.py untuk berbagai kategori yang ingin di show seperti harga. Dari model tersebut dibuat bagian “more” agar detail produk dapat lebih terlihat.

6.  Apakah ada feedback untuk asisten dosen tutorial 2 yang telah kamu kerjakan sebelumnya?
Jawab: Sejauh ini asdos sudah sangat dapat membantu saya dalam menyelesaikan masalah yang coba saya tanyakan.

link foto postman: https://docs.google.com/document/d/1_5-CjRzpEVRuGpWug-JO8lpAHbHNIloiEexLFajqEs8/edit?usp=sharing

Tugas 4:
1. Apa itu Django AuthenticationForm? Jelaskan juga kelebihan dan kekurangannya.

AuthenticationForm adalah subclass dari Django yang memiliki fokus di login pengguna dan melakukan validasi terhadap input username dan password dari pengguna yang valid. 
Kelebihan: 
Terintegrasi dengan Django
AuthenticationForm Django memang compatible dengan Django karena merupakan bagian dari Django itu sendiri, sehingga akses dan semua fitur dapat didukung secara penuh
Validasi built in
Menangani berbagai proses validasi seperti pengguna aktif,proteksi terhadap timging attacks, dan mencegah login pengguna yang sudah dinonaktifkan
Fleksibel 
AuthenticationForm Django dapat mendukung berbagai authentication backend. Tak hanya itu subclass ini juga dapat diextend dan dikustomisasi sesuai kebutuhan.
Kelebihan: 
Fungsi yang terbatas
AuthenticationForm hanya bisa menangani username dan password authentication dan tidak mendukung multi factor authentication
Tidak mendukung Modern Auth Patterns
AuthenticationForm tidak mendukung passwordless authentication dan tidak mendukung social authentication secara langsung
Security terbatas 
Tidak ada captcha dalam pencegahan brute force password dan username.

2. Apa perbedaan antara autentikasi dan otorisasi? Bagaiamana Django mengimplementasikan kedua konsep tersebut?
Autentikasi adalah proses melakukan verifikasi pengguna. Autentikasi menggunakan alur berupa login user, verifikasi kredensial Django, kemudian membuat sesi. Contohnya adalah ketika melakukan login pada sebuah aplikasi

Otorisasi adalah proses yang melimit apa yang boleh dilakukan user. Implementasinya adalah user melakukan akses resource yang kemudian dicek oleh permission Django, lalu memproses jika akses tersebut ditolak atau diizinkan. Contohnya adalah role admin pada Discord

3. Apa saja kelebihan dan kekurangan session dan cookies dalam konteks menyimpan state di aplikasi web?

Session adalah data yang disimpan di server dimana user mempunyai cookie untuk dapat mengaksesnya. Kelebihan sesson sendiri adalah adanya keamanan data yang dapat disimpan oleh server. Tak hanya itu, sessions dapat menyimpan banyak data dikarenakan kapasitas yang yang besar. Kapasitas besar tersebut juga didukung dengan expire otomatis yang dapat diatur pada waktu tertentu. Kekurangan dari sessions adalah jika sebuah aplikasi menggunakan banyak server, maka sessuin perlu bisa diakses dari server manapun sehingga butuh setup yang rumit. Hal ini juga merujuk pada keperluan server yang lebih kuat untuk menampung data user.

Cookies adalah file kecil yang disimpan di browser user sebagai pengenal dan akses untuk mengakses website. Kelebihan cookies sendiri adalah filenya akan tetap ada meskipun browser ditutup. Selain itu cookies daat langsung dibuat dan dibaca oleh browser. Kekurangan cookies sendiri adalah data kecil yang tersimpan sangat kecil yakni 4 kb, selain itu banyak privacy issues yang tidak disukai user.

4. Apakah penggunaan cookies aman secara default dalam pengembangan web, atau apakah ada risiko potensial yang harus diwaspadai? Bagaimana Django menangani hal tersebut?

Pada dasarnya cookies tidak aman untuk digunakan jika tidak dikonfigurasi dengan benar. Risiko utama yang harus diwaspadai diantaranya adalah
Cross-Site Request Forgery (CSRF) Penyerang bisa membuat website tak dikenal yang otomatis kirim request ke website target menggunakan cookies korban. Seperti seseorang yang memakai kartu identitas kamu untuk masuk ke tempat yang seharusnya hanya kamu yang bisa akses.
Man in the middle attacks Jika cookies dikirim melalui koneksi HTTP biasa (tidak terenkripsi), penyerang di jaringan yang sama bisa "menyadap" dan mencuri cookies tersebut.
Session Hijacking Jika session cookie dicuri, penyerang bisa "menyamar" sebagai pengguna tersebut tanpa perlu tahu username/password.
Tampering/Manipulation Pengguna bisa mengubah nilai cookies di browser mereka, yang bisa menyebabkan masalah jika aplikasi terlalu percaya dengan data cookies.
	Cara Django dapat menanganinya adalah:
Secure Flag Dalam production, Django bisa dikonfigurasi untuk hanya mengirim cookies melalui HTTPS, sehingga tidak bisa disadap di jaringan
CSRF Protection Django punya sistem CSRF protection built-in yang menggunakan token khusus untuk memverifikasi bahwa request benar-benar datang dari pengguna yang sah.
 SameSite Protection Django mendukung SameSite attribute yang mencegah browser mengirim cookies dalam cross-site requests, melindungi dari serangan CSRF.

5. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).
Membuat fungsi form dan registrasi dengan mengimport UserCreation Form dan message dan menambah fungsi register dalam direktori views yang berisi form, form.is_valid() form.save, message berisi akun sudah terbuat, dan mereturn ke show_main yang berfungsi untuk melakkan validasi isi input form dan menyimpan data. Kemudian menambah direktori register.html agar terdapat interface register account. Setelah tu di import dari main dan memasukkannya ke url

Serupa dengan registrasi, namun dengan menambah AuthenticationForm dan login. Setelahnya menambah fungsi login_user ke dalam views.py yang kemudian digunakan untuk mengautentikasi user. Fungsinya berisi if request.method == 'POST' untuk memeriksa permintaan,login(request, user) untuk melakukan proses login, Blok else: untuk pengguna baru mengakses halaman login. Lalu dimasukkan ke direktori baru login.html lagar terdapat interface login account. Setelah tu di import dari main dan memasukannya ke url

Sedikit berbeda dengan login, logout hanya perlu mengimport logout dan menambah fungsi logout yang isinya request dan mendirect ke main untuk login. Lalu menambah berkas pada main.html dan menambahkan pada url
Selanjutanya menambah import login_required di views dan mengblock bagian show_main dan show_product agar user dapat melakukan login

Agar dapat menggunakan data dari cookies, melaukan import datetime, HttpResponseRedirect dan reverse dan mengubah fungsi login_user untuk menympan cookie baru bernama las_login untuk dapat mengtrack data user. Lalu pada show_main menambah context yang berisi last_login dengan cookie yang telah dibuat. Lalu pada fungsi logout_user di views akan menambah response.delete_cookie(‘last_login’) untuk memberi data terakhir kali login.

Yang terakhir menghubungkan objek pada product dengan user dengan mengimport user dan membuat class baru untuk user sehingga terdapat data untuk masing-masing user. Lalu menambah request user pada fungsi create_product dan juga mengubah fungsi show_main sesuai dengan request user. Setelah itu masukkan pada main.html agar terpisah artikel yang dibuat user dan semua artikel serta menambah author di product_detail berupa author

link screenshot: https://docs.google.com/document/d/1B1ZS-FTU9xC_DUPDGQchrzWW9p0oBRyhViKnlVFII_k/edit?usp=sharing


