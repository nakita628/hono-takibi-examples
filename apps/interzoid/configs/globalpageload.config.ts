import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/globalpageload/1.0.0/openapi.yaml',
  output: './src/globalpageload/routes.ts',
  template: {},
  type: { output: './src/globalpageload/types.ts' },
  client: { output: './src/globalpageload/client.ts', baseUrl: '/' },
  rpc: { output: './src/globalpageload/rpc.ts', parseResponse: true },
  swr: { output: './src/globalpageload/hooks/swr.ts' },
  'tanstack-query': { output: './src/globalpageload/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/globalpageload/hooks/preact-query.ts' },
  'solid-query': { output: './src/globalpageload/hooks/solid-query.ts' },
  'vue-query': { output: './src/globalpageload/hooks/vue-query.ts' },
  'svelte-query': { output: './src/globalpageload/hooks/svelte-query.ts' },
  'angular-query': { output: './src/globalpageload/hooks/angular-query.ts' },
  docs: {
    output: './src/globalpageload/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
