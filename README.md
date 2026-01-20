# Move.js: Library Animasi DOM Sederhana
Move.js adalah sebuah library JavaScript yang memungkinkan Anda membuat animasi DOM sederhana dengan mudah. Dengan menggunakan Move.js, Anda dapat menganimasikan elemen-elemen HTML dengan berbagai jenis gerakan, seperti pergeseran, rotasi, dan lain-lain.

## Cara Instalasi/Penggunaan Awal
Untuk menggunakan Move.js, Anda hanya perlu membuat instance dari kelas `Move`:
```javascript
const movey = new Move();
```
Setelah itu, Anda dapat menggunakan berbagai metode yang disediakan oleh library ini untuk membuat animasi.

## Metode-Metode yang Tersedia
Berikut adalah penjelasan mendetail tentang setiap metode yang tersedia di Move.js:

### `right(element, distance = 100, loop = false, speed = 2)`
Menggerakkan elemen ke arah kanan.
* `element`: Selector elemen yang ingin digerakkan.
* `distance`: Jarak pergeseran (default: 100px).
* `loop`: Apakah animasi harus diulang (default: false).
* `speed`: Kecepatan animasi (default: 2px/frame).

### `left(element, distance = 100, loop = false, speed = 2)`
Menggerakkan elemen ke arah kiri.
* `element`: Selector elemen yang ingin digerakkan.
* `distance`: Jarak pergeseran (default: 100px).
* `loop`: Apakah animasi harus diulang (default: false).
* `speed`: Kecepatan animasi (default: 2px/frame).

### `up(element, distance = 100, loop = false, speed = 2)`
Menggerakkan elemen ke arah atas.
* `element`: Selector elemen yang ingin digerakkan.
* `distance`: Jarak pergeseran (default: 100px).
* `loop`: Apakah animasi harus diulang (default: false).
* `speed`: Kecepatan animasi (default: 2px/frame).

### `down(element, distance = 100, loop = false, speed = 2)`
Menggerakkan elemen ke arah bawah.
* `element`: Selector elemen yang ingin digerakkan.
* `distance`: Jarak pergeseran (default: 100px).
* `loop`: Apakah animasi harus diulang (default: false).
* `speed`: Kecepatan animasi (default: 2px/frame).

### `rotate(element, distance = 360, loop = false, speed = 2)`
Menggerakkan elemen dengan rotasi.
* `element`: Selector elemen yang ingin digerakkan.
* `distance`: Jarak rotasi (default: 360deg).
* `loop`: Apakah animasi harus diulang (default: false).
* `speed`: Kecepatan animasi (default: 2deg/frame).

### `move(element, targetX, targetY, speed = 2, loop = false)`
Menggerakkan elemen ke koordinat spesifik.
* `element`: Selector elemen yang ingin digerakkan.
* `targetX`: Koordinat X target.
* `targetY`: Koordinat Y target.
* `speed`: Kecepatan animasi (default: 2px/frame).
* `loop`: Apakah animasi harus diulang (default: false).

### `stop(element)`
Menghentikan animasi elemen.
* `element`: Selector elemen yang ingin dihentikan.

### `stopAll()`
Menghentikan semua animasi.

### `isColiding(selector1, selector2)`
Memeriksa apakah dua elemen sedang bertabrakan.
* `selector1`: Selector elemen pertama.
* `selector2`: Selector elemen kedua.

### `key(cmd = "console.log('Not found cmd')", delay = 2)`
Menjalankan perintah tertentu dengan delay.
* `cmd`: Perintah yang ingin dijalankan.
* `delay`: Waktu delay (default: 2 detik).

### `imgAnimation(element, usrc, delay = 0.5, loop = false)`
Menganimasikan gambar dengan mengganti sumber gambar.
* `element`: Selector elemen gambar yang ingin dianimasikan.
* `usrc`: Sumber gambar baru.
* `delay`: Waktu delay (default: 0.5 detik).
* `loop`: Apakah animasi harus diulang (default: false).

## Contoh Kode Penggunaan
Berikut adalah contoh kode penggunaan Move.js dengan chaining dan async/await:
```javascript
const movey = new Move();

// Menggerakkan elemen ke kanan
movey.right('#elemen', 100, true, 2);

// Menggerakkan elemen ke koordinat spesifik
movey.move('#elemen', 200, 200, 2, true);

// Menghentikan animasi
movey.stop('#elemen');

// Menjalankan perintah dengan delay
movey.key('console.log("Halo!")', 2);

// Menganimasikan gambar
movey.imgAnimation('#gambar', ['gambar1.jpg', 'gambar2.jpg'], 0.5, true);
```
Dengan menggunakan Move.js, Anda dapat membuat animasi DOM sederhana dengan mudah dan cepat.