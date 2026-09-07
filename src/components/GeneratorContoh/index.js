import {useState} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import {
  KATEGORI,
  LABEL_KATEGORI,
  contohPerKategori,
} from '@site/src/data/contohInjeksi';
import styles from './index.module.css';

// Generator contoh edukatif.
//
// Komponen ini HANYA membaca dataset statis terkurasi dari
// src/data/contohInjeksi. Tidak ada panggilan jaringan, API LLM, atau
// pembuatan payload secara langsung. Tujuannya edukatif dan berorientasi
// pertahanan: setiap contoh selalu dipasangkan dengan mitigasinya.
//
// Catatan SSR: state diinisialisasi secara deterministik (kategori pertama,
// indeks 0) sehingga render di server dan render pertama di klien sama. Pemilihan
// contoh acak hanya terjadi lewat interaksi pengguna (event handler), bukan saat
// render, agar tidak terjadi hydration mismatch.

export default function GeneratorContoh() {
  const [kategori, setKategori] = useState(KATEGORI[0]);
  const [indeks, setIndeks] = useState(0);

  const daftar = contohPerKategori(kategori);
  const kosong = daftar.length === 0;
  const aman = kosong ? -1 : Math.min(indeks, daftar.length - 1);
  const contoh = kosong ? null : daftar[aman];

  function pilihKategori(kat) {
    setKategori(kat);
    // Reset ke contoh pertama agar deterministik saat berganti kategori.
    setIndeks(0);
  }

  function tampilkanContoh() {
    if (kosong) {
      return;
    }
    if (daftar.length === 1) {
      setIndeks(0);
      return;
    }
    // Pilih contoh acak yang berbeda dari yang sedang tampil.
    let berikut = Math.floor(Math.random() * daftar.length);
    if (berikut === aman) {
      berikut = (berikut + 1) % daftar.length;
    }
    setIndeks(berikut);
  }

  return (
    <div className={styles.generator}>
      <div className={styles.catatan} role="note">
        <strong>Catatan:</strong> Semua contoh di bawah bersifat terkurasi,
        ilustratif, dan hanya untuk pembelajaran defensif. Generator ini tidak
        membuat payload secara langsung dan tidak melakukan panggilan ke jaringan
        atau model bahasa apa pun. Contoh diambil dari kumpulan data statis yang
        selalu dipasangkan dengan mitigasinya.
      </div>

      <div className={styles.kontrol}>
        <span className={styles.labelKontrol}>Pilih kategori:</span>
        <div className={styles.tombolKategori} role="group" aria-label="Pilih kategori">
          {KATEGORI.map((kat) => (
            <button
              type="button"
              key={kat}
              className={clsx(
                'button',
                'button--sm',
                kat === kategori ? 'button--primary' : 'button--secondary',
              )}
              aria-pressed={kat === kategori}
              onClick={() => pilihKategori(kat)}>
              {LABEL_KATEGORI[kat]}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.aksi}>
        <button
          type="button"
          className="button button--primary"
          onClick={tampilkanContoh}
          disabled={kosong}>
          Tampilkan contoh
        </button>
        {!kosong && (
          <span className={styles.hitung}>
            {daftar.length} contoh tersedia untuk kategori ini
          </span>
        )}
      </div>

      {kosong ? (
        <div className={styles.kosong} role="status">
          Belum ada contoh untuk kategori ini.
        </div>
      ) : (
        <article className={styles.kartu} aria-live="polite">
          <span className={styles.badge}>{LABEL_KATEGORI[contoh.kategori]}</span>
          <Heading as="h3" className={styles.judul}>
            {contoh.judul}
          </Heading>
          <p className={styles.teknik}>Teknik: {contoh.teknik}</p>

          <h4 className={styles.subjudul}>Contoh (ilustratif)</h4>
          <pre className={styles.contoh}>
            <code>{contoh.contoh}</code>
          </pre>

          <h4 className={styles.subjudul}>Mengapa ini berhasil</h4>
          <p className={styles.caraKerja}>{contoh.cara_kerja}</p>

          <h4 className={styles.subjudul}>Mitigasi / Cara bertahan</h4>
          <ul className={styles.mitigasi}>
            {contoh.mitigasi.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>

          {contoh.referensi && contoh.referensi.length > 0 && (
            <>
              <h4 className={styles.subjudul}>Referensi</h4>
              <ul className={styles.referensi}>
                {contoh.referensi.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </>
          )}
        </article>
      )}
    </div>
  );
}
