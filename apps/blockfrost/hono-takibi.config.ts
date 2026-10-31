import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/blockfrost/openapi/master/blockfrost-openapi.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://cardano-mainnet.blockfrost.io/api/v0',
  },
})
