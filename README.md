# AI Injection - Materi Edukasi Keamanan LLM

Repositori ini berisi materi edukasi mengenai teknik-teknik serangan terhadap
sistem berbasis Large Language Model (LLM) beserta cara pertahanannya. Materi
disusun sebagai fondasi konten untuk sebuah website pembelajaran keamanan AI.

Fokus materi ini adalah **edukasi dan pertahanan** (defense-oriented): memahami
cara kerja serangan agar dapat merancang mitigasi yang tepat. Contoh yang
diberikan bersifat ilustratif untuk pembelajaran, bukan untuk menyerang sistem
produksi pihak ketiga.

## Topik yang Dibahas

1. [Direct Prompt Injection](materi/01-direct-prompt-injection.md)
2. [Indirect Prompt Injection](materi/02-indirect-prompt-injection.md)
3. [Tool Poisoning](materi/03-tool-poisoning.md)

## Struktur Materi

| Berkas | Isi |
| --- | --- |
| [`materi/00-pengantar.md`](materi/00-pengantar.md) | Pengantar dan gambaran umum ketiga topik |
| [`materi/01-direct-prompt-injection.md`](materi/01-direct-prompt-injection.md) | Direct Prompt Injection |
| [`materi/02-indirect-prompt-injection.md`](materi/02-indirect-prompt-injection.md) | Indirect Prompt Injection |
| [`materi/03-tool-poisoning.md`](materi/03-tool-poisoning.md) | Tool Poisoning |
| [`materi/04-referensi.md`](materi/04-referensi.md) | Referensi dan bacaan lanjutan |

## Cara Menggunakan

Setiap dokumen ditulis dalam format Markdown sehingga dapat langsung
di-render menjadi halaman website. Mulailah dari
[pengantar](materi/00-pengantar.md) untuk memahami keterkaitan antar topik,
lalu lanjutkan ke masing-masing materi.

## Sasaran Pembaca

- Pengembang aplikasi berbasis LLM
- Tim keamanan (security engineer, AppSec, red/blue team)
- Mahasiswa dan praktisi yang mempelajari keamanan AI
