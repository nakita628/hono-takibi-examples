import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Ethereum Beacon Node API, official OpenAPI spec:
  // https://github.com/ethereum/beacon-APIs/blob/0ed12552077c9927ba2599ee632e76b2caf021d7/beacon-node-oapi.yaml
  // Generates with hono-takibi 0.32.6, but the output fails typecheck (19 errors), so src/ is not committed:
  // schema names built from JSON-pointer $refs are used but never declared.
  input: 'https://raw.githubusercontent.com/ethereum/beacon-APIs/master/beacon-node-oapi.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'http://localhost:5052',
  },
})
