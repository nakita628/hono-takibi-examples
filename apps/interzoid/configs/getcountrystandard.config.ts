import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getcountrystandard/1.0.0/openapi.yaml',
  output: './src/getcountrystandard/routes.ts',
  template: {},
  type: { output: './src/getcountrystandard/types.ts' },
  client: { output: './src/getcountrystandard/client.ts', baseUrl: '/' },
  rpc: { output: './src/getcountrystandard/rpc.ts', parseResponse: true },
  swr: { output: './src/getcountrystandard/hooks/swr.ts' },
  'tanstack-query': { output: './src/getcountrystandard/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/getcountrystandard/hooks/preact-query.ts' },
  'solid-query': { output: './src/getcountrystandard/hooks/solid-query.ts' },
  'vue-query': { output: './src/getcountrystandard/hooks/vue-query.ts' },
  'svelte-query': { output: './src/getcountrystandard/hooks/svelte-query.ts' },
  'angular-query': { output: './src/getcountrystandard/hooks/angular-query.ts' },
  docs: {
    output: './src/getcountrystandard/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
