/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      appDir: true},




    images: {
        domains: ["cdn.imagin.studio"]
    }
}

module.exports = nextConfig