const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'en',
    localeDetection: true,
  },
}

module.exports = nextConfig
