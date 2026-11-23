import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/presalytics.io/ooxml/0.1.0/openapi.yaml',
  output: './src/presalytics-io-ooxml/routes.ts',
  template: {},
  type: { output: './src/presalytics-io-ooxml/types.ts' },
  client: { output: './src/presalytics-io-ooxml/client.ts', baseUrl: '/' },
  rpc: { output: './src/presalytics-io-ooxml/rpc.ts', parseResponse: true },
  swr: { output: './src/presalytics-io-ooxml/hooks/swr.ts' },
  'tanstack-query': { output: './src/presalytics-io-ooxml/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/presalytics-io-ooxml/hooks/preact-query.ts' },
  'solid-query': { output: './src/presalytics-io-ooxml/hooks/solid-query.ts' },
  'vue-query': { output: './src/presalytics-io-ooxml/hooks/vue-query.ts' },
  'svelte-query': { output: './src/presalytics-io-ooxml/hooks/svelte-query.ts' },
  'angular-query': { output: './src/presalytics-io-ooxml/hooks/angular-query.ts' },
  docs: {
    output: './src/presalytics-io-ooxml/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
