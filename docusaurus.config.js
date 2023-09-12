// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config();
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
URL = "https://" + process.env.REPO_OWNER +".github.io"
BASE_URL = "/" + process.env.REPO_NAME + "/"
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  //url: `https://${process.env.REPO_OWNER}.github.io`,
  //baseUrl: `/${process.env.REPO_NAME}/`,
  url: 'https://diego4bits.github.io',
  baseUrl: '/docusaurus_test/',
  projectName: 'Documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Documentatation',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    
};

module.exports = config;
