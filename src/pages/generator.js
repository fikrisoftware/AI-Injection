import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import GeneratorContoh from '@site/src/components/GeneratorContoh';

// Halaman Generator Contoh Edukatif.
//
// Merender komponen interaktif <GeneratorContoh/> yang menampilkan contoh
// terkurasi dari dataset statis (src/data/contohInjeksi). Tidak ada panggilan
// jaringan atau model bahasa: seluruh contoh bersifat ilustratif dan
// dipasangkan dengan mitigasinya, sesuai batasan keamanan proyek ini.
export default function Generator() {
  return (
    <Layout
      title="Generator Contoh Edukatif"
      description="Generator contoh edukatif terkurasi untuk prompt injection dan tool poisoning">
      <main className="container margin-vert--lg">
        <Heading as="h1">Generator Contoh Edukatif</Heading>
        <p>
          Halaman ini membantu Anda menjelajahi contoh serangan prompt injection
          dan tool poisoning untuk tujuan pembelajaran defensif. Pilih salah satu
          kategori (Direct Prompt Injection, Indirect Prompt Injection, atau Tool
          Poisoning), lalu klik <strong>Tampilkan contoh</strong> untuk melihat
          contoh terkurasi beserta penjelasan mengapa teknik itu berhasil dan
          cara bertahan terhadapnya.
        </p>
        <p>
          Semua contoh diambil dari kumpulan data statis yang telah dikurasi dan
          bersifat ilustratif. Generator ini <strong>tidak</strong> membuat
          payload baru, tidak mengoptimalkan serangan, dan tidak melakukan
          panggilan ke jaringan maupun model bahasa apa pun. Untuk penjelasan
          lengkap tiap teknik, baca materinya mulai dari{' '}
          <Link to="/docs/pengantar">Pengantar</Link>.
        </p>

        <GeneratorContoh />
      </main>
    </Layout>
  );
}
