import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openchannel.io/market/2.0.24/openapi.yaml',
  output: './src/openchannel-io-market/routes.ts',
  template: {},
  type: { output: './src/openchannel-io-market/types.ts' },
  client: { output: './src/openchannel-io-market/client.ts', baseUrl: '/' },
  rpc: { output: './src/openchannel-io-market/rpc.ts', parseResponse: true },
  swr: { output: './src/openchannel-io-market/hooks/swr.ts' },
  'tanstack-query': { output: './src/openchannel-io-market/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/openchannel-io-market/hooks/preact-query.ts' },
  'solid-query': { output: './src/openchannel-io-market/hooks/solid-query.ts' },
  'vue-query': { output: './src/openchannel-io-market/hooks/vue-query.ts' },
  'svelte-query': { output: './src/openchannel-io-market/hooks/svelte-query.ts' },
  'angular-query': { output: './src/openchannel-io-market/hooks/angular-query.ts' },
  docs: {
    output: './src/openchannel-io-market/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
