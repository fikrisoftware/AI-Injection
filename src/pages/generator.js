import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

// Halaman placeholder untuk Generator. Komponen interaktif akan ditambahkan
// pada fitur berikutnya; untuk saat ini halaman ini hanya memastikan rute
// /generator tersedia sehingga tautan navbar tidak rusak saat build.
export default function Generator() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Generator"
      description="Generator contoh edukatif untuk prompt injection dan tool poisoning">
      <main className="container margin-vert--lg">
        <Heading as="h1">Generator Contoh Edukatif</Heading>
        <p>
          Halaman ini akan menampilkan generator contoh edukatif dari kumpulan
          data terkurasi (labeled examples) untuk kategori Direct Prompt
          Injection, Indirect Prompt Injection, dan Tool Poisoning. Fitur
          interaktifnya sedang disiapkan.
        </p>
        <p>
          Sementara itu, silakan pelajari materinya di{' '}
          <a href="/docs/pengantar">Pengantar</a>. Semua contoh bersifat
          ilustratif untuk pembelajaran defensif dan selalu dipasangkan dengan
          mitigasinya.
        </p>
        <p>
          <em>{siteConfig.title}</em>
        </p>
      </main>
    </Layout>
  );
}
