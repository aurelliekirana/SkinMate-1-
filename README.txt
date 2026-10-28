SKINCARE EXPERT SYSTEM - HTML VERSION
=======================================

Nama sistem: SkinMate — Sistem Pakar Skincare

Isi folder:
1. index.html  -> tampilan/struktur aplikasi
2. style.css   -> desain dan CSS
3. script.js   -> database + logika sistem pakar

CARA MENJALANKAN
----------------

Cara paling sederhana:
1. Ekstrak folder.
2. Buka folder tersebut di VS Code.
3. Buka file index.html.
4. Klik kanan -> Open with Live Server jika extension Live Server sudah terpasang.

Kalau tidak memakai Live Server:
- File index.html juga bisa dibuka langsung di browser.

KONSEP PROGRAM
---------------

Alur sistem:

Profil (nama, usia, jenis kelamin, kondisi khusus)
    ↓
Jenis Kulit
    ↓
Keluhan Utama (+ tipe jerawat bila memilih Jerawat)
    ↓
Tingkat Sensitivitas
    ↓
Gaya Hidup & Lingkungan
    ↓
Cari data pada database pengetahuan, lalu saring/sesuaikan dengan profil
    ↓
Tampilkan:
- Ringkasan profil & peringatan
- Analisis
- Penyesuaian profil (usia, kondisi khusus, sensitivitas, gaya hidup)
- Kandungan yang disarankan (dengan label keamanan)
- Bahan yang dihindari/ditunda
- Referensi produk

Versi ini sengaja dibuat tanpa Python/Streamlit sehingga hanya menggunakan:
HTML + CSS + JavaScript.

Pembaruan: foto referensi tipe kulit, pilihan keluhan lebih beragam untuk tiap tipe kulit, dan tema warna ungu muda. Foto eksternal memerlukan koneksi internet.

Catatan rekomendasi: nama brand yang ditampilkan hanya contoh untuk ditelusuri berdasarkan kandungan. Kecocokan produk berbeda pada tiap orang dan bukan jaminan hasil. Lakukan patch test dan periksa komposisi produk.


Pembaruan visual:
- Ilustrasi tekstur kulit lokal tersedia di folder images (kulit kering, berminyak, sensitif, dan tekstur seimbang sebagai referensi kombinasi).
- Gambar merupakan referensi visual ilustratif, bukan alat diagnosis. Pilihan tipe kulit sebaiknya tetap mempertimbangkan kondisi kulit pengguna.
- Tombol Lanjutkan disembunyikan pada tahap keluhan; tombol yang tersedia di tahap terakhir adalah Lihat hasil analisis.


PEMBARUAN: PROFIL, SUB-KONDISI, DAN GAYA HIDUP
----------------------------------------------
Wizard kini 5 langkah: Profil, Jenis kulit, Keluhan, Sensitivitas, Gaya hidup.

1. Profil dasar
   - Nama dan usia (10-99 tahun). Usia menentukan fokus rekomendasi:
     di bawah 18 / 18-24 (jerawat, minyak), 25-34 (pencegahan), 35-44 dan 45+ (tanda penuaan).
     Retinoid untuk usia di bawah 18 tahun hanya ditampilkan sebagai "hanya dengan arahan dokter".
   - Jenis kelamin dan kondisi khusus (hamil / menyusui / program hamil). Kondisi khusus hanya
     muncul jika jenis kelamin bukan laki-laki. Bahan disaring dengan 3 status:
     aman, konsultasi dokter dulu, dihindari (dipindah ke kartu "Sebaiknya dihindari / ditunda"
     beserta alternatifnya). Sunscreen otomatis beralih ke filter mineral.

2. Sub-kondisi / detail keluhan
   - Tipe jerawat (muncul jika keluhan = Jerawat): pasir/komedonal, papula/pustula, batu/kistik,
     atau belum yakin. Jerawat batu menampilkan anjuran ke dokter kulit.
   - Tingkat sensitivitas (mudah memerah, perih saat panas, gatal saat produk baru, perih saat skincare):
     0 = tidak sensitif, 1 = ringan, 2 = sedang, 3 = tinggi. Pada tingkat tinggi bahan aktif kuat
     ditunda dan diganti bahan penenang (ceramide, panthenol, oatmeal koloid).
   - Keluhan "Jerawat" ditambahkan juga untuk kulit Kering dan Sensitif.

3. Gaya hidup & lingkungan
   - Aktivitas dalam/luar ruangan -> pilihan SPF dan anjuran pengulangan sunscreen.
   - Penggunaan makeup -> anjuran double cleansing dan makeup non-komedogenik.
   - Paparan polusi -> antioksidan dan anjuran pembersihan.

Lokasi aturan di script.js:
   acneTypes, ingredientRules (status hamil, bahan kuat, alternatif), ageProfile(),
   sensitivityLevel(), dan buildRecommendation() yang menggabungkan semuanya.
   Menambah bahan baru cukup dengan menambah satu entri di ingredientRules dan brandSuggestions.

Perbaikan: tombol "Lanjutkan" dan "Lihat hasil analisis" sebelumnya tampil bersamaan karena CSS
menimpa atribut hidden; kini hanya satu tombol yang tampil sesuai langkah.

Catatan keamanan: aturan kehamilan/menyusui bersifat konservatif dan hanya informasi umum,
bukan pengganti saran dokter.
