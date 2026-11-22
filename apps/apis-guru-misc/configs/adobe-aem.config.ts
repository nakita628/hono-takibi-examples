import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/adobe.com/aem/3.7.1-pre.0/openapi.yaml',
  output: './src/adobe-aem/routes.ts',
  template: {},
  type: { output: './src/adobe-aem/types.ts' },
  client: { output: './src/adobe-aem/client.ts', baseUrl: '/' },
  rpc: { output: './src/adobe-aem/rpc.ts', parseResponse: true },
  swr: { output: './src/adobe-aem/hooks/swr.ts' },
  'tanstack-query': { output: './src/adobe-aem/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/adobe-aem/hooks/preact-query.ts' },
  'solid-query': { output: './src/adobe-aem/hooks/solid-query.ts' },
  'vue-query': { output: './src/adobe-aem/hooks/vue-query.ts' },
  'svelte-query': { output: './src/adobe-aem/hooks/svelte-query.ts' },
  'angular-query': { output: './src/adobe-aem/hooks/angular-query.ts' },
  docs: {
    output: './src/adobe-aem/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
