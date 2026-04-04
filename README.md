# Cypress Automation Testing - OrangeHRM Login

## 🌐 Website yang Diuji

https://opensource-demo.orangehrmlive.com

---

## 🛠️ Tools & Teknologi

* Cypress (Automation Testing Framework)
* JavaScript
* Node.js
* Visual Studio Code

---

## 📁 Struktur Project

```
BOOTCAMP/
 └── cypress/
      ├── e2e/
      │    └── quiz3.cy.js      # Test script login
      ├── fixtures/             
      ├── support/              
 ├── node_modules/
 ├── cypress.config.js
 ├── package.json
 └── README.md
```

---

## ✅ Test Cases

* **TC01** - Login dengan username & password valid
* **TC02** - Password salah
* **TC03** - Username kosong
* **TC04** - Password kosong
* **TC05** - Username & Password kosong
* **TC06** - Username salah & password kosong
* **TC07** - Username kosong & password salah
* **TC08** - Username & password tidak valid
* **TC11** - Tombol login tampil
* **TC15** - Logout berhasil

---

## ▶️ Cara Menjalankan Project

### 1. Clone Repository

```
git clone https://github.com/RuthHutagalung/Quiz-3-Bootcamp.git
```

### 2. Masuk ke Folder Project

```
cd BOOTCAMP
```

### 3. Install Dependencies

```
npm install
```

### 4. Jalankan Cypress

```
npx cypress open
```

### 5. Pilih Test

* Klik **E2E Testing**
* Pilih file: `quiz3.cy.js`

---

## 🎯 Hasil Pengujian

Semua test case telah dijalankan dan menghasilkan:

* ✅ PASS (berhasil)
* ❌ FAIL (tidak ada)

---

## ⚠️ Catatan

* Website OrangeHRM menggunakan API yang kadang membutuhkan waktu loading
* Oleh karena itu, digunakan:

  * `timeout`
  * `cy.wait()`
  * assertion yang stabil

---


## 👨‍💻 Author

Nama: Ruth Marelisa Hutagalung
Project: Automation Testing Cypress - OrangeHRM Login

---

## 🔗 Link Repository

https://github.com/RuthHutagalung/Quiz-3-Bootcamp.git
