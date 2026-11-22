import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/c19qrserver.local/1.1/openapi.yaml',
  output: './src/c19qrserver/routes.ts',
  template: {},
  type: { output: './src/c19qrserver/types.ts' },
  client: { output: './src/c19qrserver/client.ts', baseUrl: '/' },
  rpc: { output: './src/c19qrserver/rpc.ts', parseResponse: true },
  swr: { output: './src/c19qrserver/hooks/swr.ts' },
  'tanstack-query': { output: './src/c19qrserver/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/c19qrserver/hooks/preact-query.ts' },
  'solid-query': { output: './src/c19qrserver/hooks/solid-query.ts' },
  'vue-query': { output: './src/c19qrserver/hooks/vue-query.ts' },
  'svelte-query': { output: './src/c19qrserver/hooks/svelte-query.ts' },
  'angular-query': { output: './src/c19qrserver/hooks/angular-query.ts' },
  docs: {
    output: './src/c19qrserver/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
