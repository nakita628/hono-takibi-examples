import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // bunq API, official OpenAPI spec:
  // https://github.com/bunq/doc/blob/1d5e1e0eba19a91a2b21bee25780f124c9743711/swagger.json
  input: 'https://raw.githubusercontent.com/bunq/doc/master/swagger.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.bunq.com/v1',
  },
})
