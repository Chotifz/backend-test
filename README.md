![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-lightgreen)


# User Management API

Aplikasi sederhana untuk manajemen user dengan fitur CRUD (Create, Read, Update, Delete) menggunakan Node.js, Express, dan MongoDB.

## Daftar Isi

- [Fitur](#fitur)
- [Teknologi](#teknologi)
- [Prasyarat](#prasyarat)
- [Instalasi](#instalasi)
- [Menjalankan Aplikasi](#menjalankan-aplikasi)
- [Menjalankan dengan Docker](#menjalankan-dengan-docker)
- [Struktur Proyek](#struktur-proyek)
- [API Endpoints](#api-endpoints)
- [Dokumentasi API](#dokumentasi-api)

## Fitur

- Registrasi user baru
- Mendapatkan daftar semua user
- Mendapatkan detail user berdasarkan ID
- Memperbarui informasi user
- Menghapus user
- Validasi data input
- Hashing password untuk keamanan
- Dokumentasi API dengan Swagger

## Teknologi

- Node.js
- Express.js
- MongoDB dengan Mongoose
- Express Validator untuk validasi data
- Bcrypt.js untuk hashing password
- Swagger untuk dokumentasi API
- Nodemon untuk development

## Prasyarat

Sebelum menjalankan aplikasi ini, pastikan Anda telah menginstal:

1. [Node.js](https://nodejs.org/) (versi 18.x atau lebih baru)
2. [MongoDB](https://www.mongodb.com/try/download/community) atau akun [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
3. [PNPM](https://pnpm.io/installation) (opsional, bisa menggunakan npm atau yarn)

## Instalasi

1. Clone repositori ini:

```bash
git clone https://github.com/yourusername/user-management-api.git
cd user-management-api
```

2. Instal dependensi:

Menggunakan PNPM:
```bash
pnpm install
```

Atau menggunakan NPM:
```bash
npm install
```

3. Buat file `.env` berdasarkan `.env.example`:

```bash
cp .env.example .env
```

4. Edit file `.env` dan sesuaikan dengan konfigurasi Anda:

```
PORT=5000
mongodb+srv://username:password@cluster.mongodb.net/user-management
```

*Catatan: Jika Anda menggunakan MongoDB Atlas, gunakan connection string yang disediakan oleh Atlas.*

## Menjalankan Aplikasi

1. Jalankan MongoDB (jika menggunakan MongoDB lokal):

```bash
mongod
```

2. Jalankan aplikasi:

Development mode dengan nodemon (auto-restart):
```bash
pnpm dev
# atau
npm run dev
```

Production mode:
```bash
pnpm start
# atau
npm start
```

3. Aplikasi akan berjalan di:
   - Server API: http://localhost:5000
   - Dokumentasi Swagger: http://localhost:5000/api-docs

## Menjalankan dengan Docker

1. Build Docker Image

```bash
docker build -t user-management-api .
```

2. Jalankan Aplikasi Container Dengan MongoDB Atlas

```bash
docker run -d \
  --name user-management-app \
  -p 5000:5000 \
  -e MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/user-management \
  -e PORT=5000 \
  user-management-api
```
Ganti `mongodb+srv://username:password@cluster.mongodb.net/user-management` dengan connection string MongoDB Anda.

3. Akses Aplikasi
- API: http://localhost:5000
- Dokumentasi Swagger: http://localhost:5000/api-docs

4. Mengelola Container

```bash
# Melihat logs aplikasi
docker logs user-management-app

# Menghentikan container
docker stop user-management-app

# Menjalankan kembali container
docker start user-management-app

# Menghapus container
docker rm user-management-app 

# Menghapus network
docker network rm user-management-network

```

## Struktur Proyek

```
user-management-api/
├── controllers/             # Handler logika bisnis
│   └── user.controller.js   # Controller untuk user
├── middlewares/             # Middleware
│   └── validateUser.middleware.js  # Validasi data user
├── models/                  # Model database
│   └── User.js              # Model User untuk MongoDB
├── routes/                  # Route API
│   └── user.route.js        # Route untuk user
├── .dockerignore            # File yang diabaikan dalam Docker build
├── .env.example             # Contoh konfigurasi environment
├── .gitignore               # File yang diabaikan Git
├── Dockerfile               # Instruksi build Docker image
├── index.js                 # Entry point aplikasi
├── package.json             # Dependensi dan script
├── swagger.js               # Konfigurasi Swagger
└── swagger-docs.js          # Dokumentasi API Swagger
```

## API Endpoints

| Method | Endpoint      | Deskripsi                 | Body Data                                             |
|--------|---------------|---------------------------|-------------------------------------------------------|
| POST   | /api/users    | Membuat user baru         | name, email, phone, departement, password             |
| GET    | /api/users    | Mendapatkan semua user    | -                                                     |
| GET    | /api/users/:id | Mendapatkan user by ID    | -                                                     |
| PATCH  | /api/users/:id | Memperbarui user          | name (optional), email (optional), phone (optional), departement (optional) |
| DELETE | /api/users/:id | Menghapus user            | -                                                     |

## Dokumentasi API

Dokumentasi API tersedia dengan Swagger UI di:

```
http://localhost:5000/api-docs
```

Dokumentasi ini menyediakan:
- Deskripsi lengkap semua endpoint
- Schemas dan model data
- Contoh request dan response
- Fasilitas testing endpoint secara langsung