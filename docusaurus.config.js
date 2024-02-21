// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');



/** @type {import('@docusaurus/types').Config} */
const config = {



  title: 'The Community RR Studio Manual',
  tagline: 'Community run documentation for Rec Room Studio',
  url: 'https://docs.alexagirl.studio',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Alexa-RR', // Usually your GitHub org/user name.
  projectName: 'StudioDocs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/alexa-RR/StudioDocs/tree/main',
          routeBasePath: '/docs',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        blog: {
          path: 'Updates',
          routeBasePath: 'Updates',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/alexa-RR/StudioDocs/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: 
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */({

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'announcementBar-3', // Increment on change
        // content: `⭐️ If you like Docusaurus, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/docusaurus">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/docusaurus">Twitter ${TwitterSvg}</a>`,
        content: ` ❤️ <b><a target="_blank" href="https://github.com/sponsors/Alexa-RR">Fund my domain :D</a> ❤️</b>`,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'EQMKW1PT9X',
  
        // Public API key: it is safe to commit it
        apiKey: '4fc9aef2d878bd15e24ee67424654558',
  
        indexName: 'alexagirl',
      },
      navbar: {
        title: 'The Community RR Studio Manual',
        logo: {
          alt: 'RRStudio',
          src: 'img/RRSlogo.svg',
        },
        items: [
          // Left
          {
            type: 'doc',
            position: 'left',
            docId: 'intro',
            label: 'Docs',
          },
          {
            to: '/Updates',
            label: 'Updates',
            position: 'left'
          },
          // Right 
          {
            href: 'https://github.com/Alexa-RR/studiodocs',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
  
      /*
        footer: {
          style: 'dark',
          logo: {
            alt: 'BlueNest',
            src: '/img/BlueNest_ad_long_meme.svg',
            href: 'https://bluenest.it/RecDev/',
            width: '100%',
            height: '100%',
          }
        
        
          //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },

      */
        
  

    }),
  }
module.exports = config;
