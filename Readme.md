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
|----------------request—-------------| template melalui input, model melalui write data

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
