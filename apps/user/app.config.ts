export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'UnInbox - User Guide'
  },
  header: {
    logo: {
      alt: 'Un',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [
      {
        icon: 'i-heroicons-link',
        to: 'https://UnInbox.com',
        target: '_blank',
        'aria-label': 'UnInbox App'
      },
      {
        icon: 'i-simple-icons-discord',
        to: 'https://discord.gg/U6tJCqgRm9',
        target: '_blank',
        'aria-label': 'UnInbox on Discord'
      },
      {
        icon: 'i-simple-icons-x',
        to: 'https://x.com/UnInbox',
        target: '_blank',
        'aria-label': 'UnInbox on X'
      },
      {
        icon: 'i-simple-icons-github',
        to: 'https://github.com/un/inbox',
        target: '_blank',
        'aria-label': 'UnInbox on github'
      }
    ]
  },
  footer: {
    credits: 'Copyright © 2023 Unproprietary Corporation',
    colorMode: false,
    links: [
      {
        icon: 'i-heroicons-link',
        to: 'https://UnInbox.com',
        target: '_blank',
        'aria-label': 'UnInbox App'
      },
      {
        icon: 'i-simple-icons-discord',
        to: 'https://discord.gg/U6tJCqgRm9',
        target: '_blank',
        'aria-label': 'UnInbox on Discord'
      },
      {
        icon: 'i-simple-icons-x',
        to: 'https://x.com/UnInbox',
        target: '_blank',
        'aria-label': 'UnInbox on X'
      },
      {
        icon: 'i-simple-icons-github',
        to: 'https://github.com/un/inbox',
        target: '_blank',
        'aria-label': 'UnInbox on GitHub'
      }
    ]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/nuxt-ui-pro/docs/edit/main/content',
      links: [
        {
          icon: 'i-heroicons-star',
          label: 'Star on GitHub',
          to: 'https://github.com/un/inbox',
          target: '_blank'
        },
        {
          icon: 'i-heroicons-link',
          label: 'Signup for UnInbox',
          to: 'https://uninbox.com',
          target: '_blank'
        }
      ]
    }
  }
});
