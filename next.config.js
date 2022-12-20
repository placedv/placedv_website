const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  i18n: {
    locales: ['it', 'en'],
    defaultLocale: 'it',
    localeDetection: true,
  },
}

module.exports = nextConfig
