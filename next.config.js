const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  i18n: {
    locales: ['it'],
    defaultLocale: 'it',
    localeDetection: false,
  },
}

module.exports = nextConfig
