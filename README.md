# AI Injection - Materi Edukasi Keamanan LLM

Repositori ini berisi materi edukasi mengenai teknik-teknik serangan terhadap
sistem berbasis Large Language Model (LLM) beserta cara pertahanannya. Materi
disusun sebagai fondasi konten untuk sebuah website pembelajaran keamanan AI.

Repositori ini kini adalah proyek **Docusaurus** (classic preset). Konten
materi telah dimigrasikan ke direktori `docs/` sehingga dapat di-render sebagai
halaman website, sementara berkas asli di `materi/` tetap dipertahankan sebagai
sumber referensi.

Fokus materi ini adalah **edukasi dan pertahanan** (defense-oriented): memahami
cara kerja serangan agar dapat merancang mitigasi yang tepat. Contoh yang
diberikan bersifat ilustratif untuk pembelajaran, bukan untuk menyerang sistem
produksi pihak ketiga.

## Menjalankan Situs

Situs dibangun dengan Docusaurus dan dikelola melalui npm (butuh Node.js 20
atau lebih baru).

```bash
# Pasang dependensi
npm install

# Jalankan server pengembangan (buka http://localhost:3000)
npm run start

# Bangun situs statis ke direktori build/
npm run build

# Layani hasil build secara lokal
npm run serve
```

`npm run build` sekaligus menjadi pemeriksa kebenaran utama: build gagal bila
ada tautan internal yang rusak atau kesalahan sintaks MDX.

## Topik yang Dibahas

1. [Direct Prompt Injection](docs/01-direct-prompt-injection.md)
2. [Indirect Prompt Injection](docs/02-indirect-prompt-injection.md)
3. [Tool Poisoning](docs/03-tool-poisoning.md)

## Struktur Materi

Halaman situs berada di `docs/`; berkas sumber asli tetap tersedia di `materi/`.

| Berkas | Isi |
| --- | --- |
| [`docs/00-pengantar.md`](docs/00-pengantar.md) | Pengantar dan gambaran umum ketiga topik |
| [`docs/01-direct-prompt-injection.md`](docs/01-direct-prompt-injection.md) | Direct Prompt Injection |
| [`docs/02-indirect-prompt-injection.md`](docs/02-indirect-prompt-injection.md) | Indirect Prompt Injection |
| [`docs/03-tool-poisoning.md`](docs/03-tool-poisoning.md) | Tool Poisoning |
| [`docs/04-referensi.md`](docs/04-referensi.md) | Referensi dan bacaan lanjutan |

Berkas Markdown asli tetap dipertahankan di direktori `materi/`
(`materi/00-pengantar.md` hingga `materi/04-referensi.md`).

## Cara Menggunakan

Setiap dokumen ditulis dalam format Markdown sehingga dapat langsung
di-render menjadi halaman website. Mulailah dari
[pengantar](docs/00-pengantar.md) untuk memahami keterkaitan antar topik,
lalu lanjutkan ke masing-masing materi. Setelah menjalankan `npm run start`,
navigasi situs (sidebar dan navbar) menyusun materi secara berurutan.

## Sasaran Pembaca

- Pengembang aplikasi berbasis LLM
- Tim keamanan (security engineer, AppSec, red/blue team)
- Mahasiswa dan praktisi yang mempelajari keamanan AI
