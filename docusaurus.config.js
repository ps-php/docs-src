/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Ps-PHP',
  tagline: 'Procedural Slim PHP Framework',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ps-php', // Usually your GitHub org/user name.
  projectName: 'psphp-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Ps-PHP',
      logo: {
        alt: 'My Site Logo',
        src: 'img/ps-logo.svg',
      },
      items: [
        {to: '/docs/getting-started/installation', label: 'Docs', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          label: 'Theme',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tutorial',
          items: [
            {
              label: 'Docs',
              to: '/docs/getting-started/installation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/ps-php',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ps-php/psphp',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ps-PHP. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['php'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
