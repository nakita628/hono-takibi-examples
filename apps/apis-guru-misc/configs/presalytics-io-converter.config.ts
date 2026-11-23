import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/presalytics.io/converter/0.1/openapi.yaml',
  output: './src/presalytics-io-converter/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/presalytics-io-converter/types.ts' },
  client: { output: './src/presalytics-io-converter/client.ts', baseUrl: '/' },
  rpc: { output: './src/presalytics-io-converter/rpc.ts', parseResponse: true },
  swr: { output: './src/presalytics-io-converter/hooks/swr.ts' },
  'tanstack-query': { output: './src/presalytics-io-converter/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/presalytics-io-converter/hooks/preact-query.ts' },
  'solid-query': { output: './src/presalytics-io-converter/hooks/solid-query.ts' },
  'vue-query': { output: './src/presalytics-io-converter/hooks/vue-query.ts' },
  'svelte-query': { output: './src/presalytics-io-converter/hooks/svelte-query.ts' },
  'angular-query': { output: './src/presalytics-io-converter/hooks/angular-query.ts' },
  docs: {
    output: './src/presalytics-io-converter/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
