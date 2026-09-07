import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Direct Prompt Injection',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    to: '/docs/direct-prompt-injection',
    description: (
      <>
        Penyerang berinteraksi langsung dengan LLM dan menyisipkan instruksi
        berbahaya lewat masukan yang mereka kendalikan. Pelajari teknik dan
        mitigasinya.
      </>
    ),
  },
  {
    title: 'Indirect Prompt Injection',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    to: '/docs/indirect-prompt-injection',
    description: (
      <>
        Instruksi berbahaya disembunyikan dalam data eksternal yang dibaca LLM,
        sehingga korban yang tidak bersalah ikut memicu serangan.
      </>
    ),
  },
  {
    title: 'Tool Poisoning',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    to: '/docs/tool-poisoning',
    description: (
      <>
        Serangan pada lapisan tool/function calling dan deskripsi tool ala MCP
        yang memanipulasi perilaku model secara diam-diam.
      </>
    ),
  },
];

function Feature({Svg, title, description, to}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className="button button--primary button--sm" to={to}>
          Baca materi
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
