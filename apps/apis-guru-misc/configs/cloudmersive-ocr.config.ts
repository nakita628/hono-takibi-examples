import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/cloudmersive.com/ocr/v1/openapi.yaml',
  output: './src/cloudmersive-ocr/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/cloudmersive-ocr/types.ts' },
  client: { output: './src/cloudmersive-ocr/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudmersive-ocr/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudmersive-ocr/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudmersive-ocr/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudmersive-ocr/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudmersive-ocr/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudmersive-ocr/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudmersive-ocr/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudmersive-ocr/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudmersive-ocr/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
