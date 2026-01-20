# Move.js
## Library untuk Animasi DOM Sederhana

Move.js adalah sebuah library JavaScript yang memungkinkan Anda untuk membuat animasi DOM sederhana dengan mudah. Dengan menggunakan library ini, Anda dapat membuat objek bergerak, berputar, dan melakukan animasi lainnya dengan mudah.

## Cara Instalasi/Penggunaan Awal

Untuk menggunakan library ini, Anda hanya perlu membuat instance dari kelas `Move`:
```javascript
const movey = new Move();
```
## Fungsi/Method

### _move(element, distance, loop, speed, direction)

Fungsi ini adalah fungsi internal yang digunakan oleh fungsi lainnya untuk membuat animasi. Fungsi ini tidak disarankan untuk digunakan secara langsung.

* `element`: Elemen atau array elemen yang akan dianimasikan.
* `distance`: Jarak yang akan ditempuh oleh elemen.
* `loop`: Boolean yang menentukan apakah animasi akan diulang.
* `speed`: Kecepatan animasi.
* `direction`: Arah animasi (right, left, up, down, atau rotate).

### move(element, targetX, targetY, speed, loop)

Fungsi ini membuat elemen bergerak ke koordinat spesifik.

* `element`: Elemen atau array elemen yang akan dianimasikan.
* `targetX`: Koordinat X yang akan dituju.
* `targetY`: Koordinat Y yang akan dituju.
* `speed`: Kecepatan animasi.
* `loop`: Boolean yang menentukan apakah animasi akan diulang.

### stop(element)

Fungsi ini menghentikan animasi elemen.

* `element`: Elemen yang akan dihentikan animasinya.

### stopAll()

Fungsi ini menghentikan semua animasi.

### isColiding(selector1, selector2)

Fungsi ini memeriksa apakah dua elemen sedang bertabrakan.

* `selector1`: Selector elemen pertama.
* `selector2`: Selector elemen kedua.

### right(element, distance, loop, speed)

Fungsi ini membuat elemen bergerak ke kanan.

* `element`: Elemen atau array elemen yang akan dianimasikan.
* `distance`: Jarak yang akan ditempuh oleh elemen.
* `loop`: Boolean yang menentukan apakah animasi akan diulang.
* `speed`: Kecepatan animasi.

### left(element, distance, loop, speed)

Fungsi ini membuat elemen bergerak ke kiri.

* `element`: Elemen atau array elemen yang akan dianimasikan.
* `distance`: Jarak yang akan ditempuh oleh elemen.
* `loop`: Boolean yang menentukan apakah animasi akan diulang.
* `speed`: Kecepatan animasi.

### up(element, distance, loop, speed)

Fungsi ini membuat elemen bergerak ke atas.

* `element`: Elemen atau array elemen yang akan dianimasikan.
* `distance`: Jarak yang akan ditempuh oleh elemen.
* `loop`: Boolean yang menentukan apakah animasi akan diulang.
* `speed`: Kecepatan animasi.

### down(element, distance, loop, speed)

Fungsi ini membuat elemen bergerak ke bawah.

* `element`: Elemen atau array elemen yang akan dianimasikan.
* `distance`: Jarak yang akan ditempuh oleh elemen.
* `loop`: Boolean yang menentukan apakah animasi akan diulang.
* `speed`: Kecepatan animasi.

### rotate(element, distance, loop, speed)

Fungsi ini membuat elemen berputar.

* `element`: Elemen atau array elemen yang akan dianimasikan.
* `distance`: Jarak yang akan ditempuh oleh elemen.
* `loop`: Boolean yang menentukan apakah animasi akan diulang.
* `speed`: Kecepatan animasi.

### key(cmd, delay)

Fungsi ini menjalankan perintahJavaScript setelah delay tertentu.

* `cmd`: Perintah JavaScript yang akan dijalankan.
* `delay`: Waktu delay dalam detik.

### imgAnimation(element, usrc, delay, loop)

Fungsi ini membuat animasi gambar.

* `element`: Elemen atau array elemen yang akan dianimasikan.
* `usrc`: Array sumber gambar yang akan dianimasikan.
* `delay`: Waktu delay antara gambar dalam detik.
* `loop`: Boolean yang menentukan apakah animasi akan diulang.

## Contoh Kode Penggunaan

### Chaining
```javascript
movey.right('#elem', 100, true, 2)
  .down('#elem', 100, true, 2)
  .rotate('#elem', 360, true, 2);
```
### Async/Await
```javascript
async function animasi() {
  await movey.key("console.log('Hello World!')", 2);
  await movey.imgAnimation('#img', ['img1.jpg', 'img2.jpg'], 0.5, true);
}

animasi();
```
Dengan menggunakan library Move.js, Anda dapat membuat animasi DOM sederhana dengan mudah dan efektif.