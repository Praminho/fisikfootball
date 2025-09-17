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
Jawab: Sejauh ini asdos sudah sangat dapat membantu saya dalam menyelesaikan masalah yang coba saya tanyakan. Asdos juga sudah 

