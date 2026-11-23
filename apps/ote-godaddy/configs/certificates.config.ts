import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ote-godaddy.com/certificates/1.0.0/openapi.yaml',
  output: './src/certificates/routes.ts',
  template: {},
  type: { output: './src/certificates/types.ts' },
  client: { output: './src/certificates/client.ts', baseUrl: '/' },
  rpc: { output: './src/certificates/rpc.ts', parseResponse: true },
  swr: { output: './src/certificates/hooks/swr.ts' },
  'tanstack-query': { output: './src/certificates/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/certificates/hooks/preact-query.ts' },
  'solid-query': { output: './src/certificates/hooks/solid-query.ts' },
  'vue-query': { output: './src/certificates/hooks/vue-query.ts' },
  'svelte-query': { output: './src/certificates/hooks/svelte-query.ts' },
  'angular-query': { output: './src/certificates/hooks/angular-query.ts' },
  docs: {
    output: './src/certificates/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
