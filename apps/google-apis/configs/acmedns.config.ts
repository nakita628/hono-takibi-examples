import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/acmedns/v1/openapi.yaml',
  output: './src/acmedns/routes.ts',
  template: {},
  type: { output: './src/acmedns/types.ts' },
  client: { output: './src/acmedns/client.ts', baseUrl: '/' },
  rpc: { output: './src/acmedns/rpc.ts', parseResponse: true },
  swr: { output: './src/acmedns/hooks/swr.ts' },
  'tanstack-query': { output: './src/acmedns/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/acmedns/hooks/preact-query.ts' },
  'solid-query': { output: './src/acmedns/hooks/solid-query.ts' },
  'vue-query': { output: './src/acmedns/hooks/vue-query.ts' },
  'svelte-query': { output: './src/acmedns/hooks/svelte-query.ts' },
  'angular-query': { output: './src/acmedns/hooks/angular-query.ts' },
  docs: {
    output: './src/acmedns/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
