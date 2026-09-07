# Pengantar: Keamanan Prompt pada Sistem LLM

## Apa itu Prompt Injection?

**Prompt injection** adalah kelas kerentanan pada aplikasi berbasis Large
Language Model (LLM) di mana penyerang menyisipkan instruksi berbahaya ke
dalam masukan yang diproses oleh model, sehingga model berperilaku di luar
yang diinginkan oleh pengembang. Berbeda dengan injeksi klasik seperti SQL
Injection yang menyerang parser deterministik, prompt injection menyerang
sistem yang memroses **bahasa alami**, di mana batas antara "instruksi" dan
"data" sangat kabur.

Inti masalahnya: bagi sebuah LLM, semua teks yang masuk ke dalam konteks
adalah teks yang berpotensi diperlakukan sebagai instruksi. Model tidak
memiliki mekanisme bawaan yang kuat untuk membedakan mana instruksi tepercaya
dari pengembang dan mana data yang tidak tepercaya dari pengguna atau sumber
eksternal.

## Mengapa Ini Penting?

Aplikasi LLM modern semakin sering:

- Menggabungkan **prompt sistem** (aturan dari pengembang) dengan **masukan
  pengguna** dalam satu konteks.
- Mengambil data eksternal (dokumen, halaman web, email) melalui pola seperti
  Retrieval-Augmented Generation (RAG).
- Memanggil **tools/functions** eksternal (API, basis data, eksekusi kode)
  atas nama pengguna.

Setiap titik integrasi ini menjadi permukaan serangan baru. Ketika LLM
diberi kemampuan untuk bertindak (mengirim email, mengakses berkas, memanggil
API), dampak dari prompt injection meningkat dari sekadar "keluaran yang salah"
menjadi "aksi berbahaya yang nyata".

## Tiga Topik dalam Materi Ini

Materi ini membahas tiga teknik yang saling berkaitan namun berbeda vektor:

### 1. Direct Prompt Injection

Penyerang **berinteraksi langsung** dengan LLM dan menyisipkan instruksi
berbahaya melalui masukan yang mereka kendalikan. Contoh paling umum adalah
upaya "jailbreak" atau "abaikan instruksi sebelumnya". Vektor: masukan
pengguna itu sendiri.

Baca: [Direct Prompt Injection](01-direct-prompt-injection.md)

### 2. Indirect Prompt Injection

Instruksi berbahaya **tidak dimasukkan langsung** oleh penyerang, melainkan
disembunyikan dalam data eksternal yang nantinya dibaca oleh LLM - misalnya
dokumen, halaman web, email, atau hasil pencarian. Korban yang tidak
bersalah memicu serangan hanya dengan meminta LLM memproses konten tersebut.

Baca: [Indirect Prompt Injection](02-indirect-prompt-injection.md)

### 3. Tool Poisoning

Serangan yang menargetkan lapisan **tool/function calling** - termasuk
deskripsi tool ala Model Context Protocol (MCP). Metadata atau deskripsi tool
yang berbahaya dapat memanipulasi cara LLM memilih dan memanggil tools,
membocorkan data, atau menjalankan aksi yang tidak diinginkan.

Baca: [Tool Poisoning](03-tool-poisoning.md)

## Bagaimana Ketiganya Berkaitan

```
                    ┌─────────────────────────┐
                    │      Aplikasi LLM        │
                    └─────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                      │
   Masukan langsung     Data eksternal          Lapisan tools
   dari pengguna        (RAG, web, email)        (function/MCP)
        │                     │                      │
        ▼                     ▼                      ▼
   Direct Prompt        Indirect Prompt         Tool
   Injection            Injection               Poisoning
```

- **Direct** dan **Indirect** membedakan *dari mana* instruksi berbahaya
  masuk: langsung dari penyerang, atau tidak langsung lewat data yang dibaca.
- **Tool Poisoning** menyerang lapisan *aksi*: bahkan bila prompt bersih,
  deskripsi tool yang jahat dapat mengubah perilaku.
- Ketiganya sering **dikombinasikan**: misalnya indirect injection yang
  memerintahkan LLM memanggil tool yang telah diracuni untuk mengekstraksi
  data.

## Prinsip Pertahanan Umum

Sebelum masuk ke detail tiap topik, ada beberapa prinsip lintas-topik:

1. **Anggap semua masukan dan data eksternal sebagai tidak tepercaya.**
2. **Terapkan hak akses paling minimal (least privilege)** pada tools dan
   integrasi yang dapat dipanggil LLM.
3. **Pisahkan instruksi tepercaya dari data tidak tepercaya** sejauh mungkin
   (misalnya penanda peran, penataan konteks yang jelas).
4. **Wajibkan konfirmasi manusia (human-in-the-loop)** untuk aksi berisiko
   tinggi.
5. **Validasi dan sanitasi keluaran** sebelum digunakan pada sistem hilir.
6. **Lakukan pemantauan dan logging** terhadap prompt, keluaran, dan
   pemanggilan tool.

Prinsip-prinsip ini akan diperdalam secara spesifik di setiap dokumen.

## Rujukan Kerangka Kerja

Materi ini selaras dengan **OWASP Top 10 for LLM Applications**, khususnya
kategori **LLM01: Prompt Injection**. Rujukan lengkap tersedia di
[Referensi dan Bacaan Lanjutan](04-referensi.md).
