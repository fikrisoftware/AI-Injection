// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Injection - Materi Edukasi Keamanan LLM',
  tagline:
    'Materi edukasi pertahanan untuk prompt injection dan tool poisoning pada sistem LLM',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://fikrisoftware.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fikrisoftware', // Usually your GitHub org/user name.
  projectName: 'AI-Injection', // Usually your repo name.

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. The deliverable content is in Bahasa
  // Indonesia.
  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/fikrisoftware/AI-Injection/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'AI Injection',
        logo: {
          alt: 'Logo AI Injection',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'materiSidebar',
            position: 'left',
            label: 'Materi',
          },
          {
            to: '/generator',
            label: 'Generator',
            position: 'left',
          },
          {
            href: 'https://github.com/fikrisoftware/AI-Injection',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Materi',
            items: [
              {
                label: 'Pengantar',
                to: '/docs/pengantar',
              },
              {
                label: 'Direct Prompt Injection',
                to: '/docs/direct-prompt-injection',
              },
              {
                label: 'Indirect Prompt Injection',
                to: '/docs/indirect-prompt-injection',
              },
              {
                label: 'Tool Poisoning',
                to: '/docs/tool-poisoning',
              },
            ],
          },
          {
            title: 'Rujukan',
            items: [
              {
                label: 'Referensi dan Bacaan Lanjutan',
                to: '/docs/referensi',
              },
              {
                label: 'OWASP Top 10 for LLM Applications',
                href: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/',
              },
            ],
          },
          {
            title: 'Lainnya',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/fikrisoftware/AI-Injection',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AI Injection. Materi edukasi keamanan LLM. Dibangun dengan Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
