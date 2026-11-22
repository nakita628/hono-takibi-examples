import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/whatsapp.local/1.0/openapi.yaml',
  output: './src/whatsapp/routes.ts',
  template: {},
  type: { output: './src/whatsapp/types.ts' },
  client: { output: './src/whatsapp/client.ts', baseUrl: '/' },
  rpc: { output: './src/whatsapp/rpc.ts', parseResponse: true },
  swr: { output: './src/whatsapp/hooks/swr.ts' },
  'tanstack-query': { output: './src/whatsapp/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/whatsapp/hooks/preact-query.ts' },
  'solid-query': { output: './src/whatsapp/hooks/solid-query.ts' },
  'vue-query': { output: './src/whatsapp/hooks/vue-query.ts' },
  'svelte-query': { output: './src/whatsapp/hooks/svelte-query.ts' },
  'angular-query': { output: './src/whatsapp/hooks/angular-query.ts' },
  docs: {
    output: './src/whatsapp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
