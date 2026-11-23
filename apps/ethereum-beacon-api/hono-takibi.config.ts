import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Ethereum Beacon Node API, official OpenAPI spec:
  // https://github.com/ethereum/beacon-APIs/blob/0ed12552077c9927ba2599ee632e76b2caf021d7/beacon-node-oapi.yaml
  // The output does not typecheck: schema names built from JSON-pointer $refs are used but never declared, and
  // a $ref inside a component is generated as the whole component (nakita628/hono-takibi#499). See docs/typecheck.md.
  input: 'https://raw.githubusercontent.com/ethereum/beacon-APIs/master/beacon-node-oapi.yaml',
  output: './src/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/types.ts' },
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
  swr: { output: './src/hooks/swr.ts' },
  'tanstack-query': { output: './src/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hooks/preact-query.ts' },
  'solid-query': { output: './src/hooks/solid-query.ts' },
  'vue-query': { output: './src/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hooks/angular-query.ts' },
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'http://localhost:5052',
  },
})
