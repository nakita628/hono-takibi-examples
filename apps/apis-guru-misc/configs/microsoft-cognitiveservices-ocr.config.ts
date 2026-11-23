import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/microsoft.com/cognitiveservices-Ocr/2.1/openapi.yaml',
  output: './src/microsoft-cognitiveservices-ocr/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/microsoft-cognitiveservices-ocr/types.ts' },
  client: { output: './src/microsoft-cognitiveservices-ocr/client.ts', baseUrl: '/' },
  rpc: { output: './src/microsoft-cognitiveservices-ocr/rpc.ts', parseResponse: true },
  swr: { output: './src/microsoft-cognitiveservices-ocr/hooks/swr.ts' },
  'tanstack-query': { output: './src/microsoft-cognitiveservices-ocr/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/microsoft-cognitiveservices-ocr/hooks/preact-query.ts' },
  'solid-query': { output: './src/microsoft-cognitiveservices-ocr/hooks/solid-query.ts' },
  'vue-query': { output: './src/microsoft-cognitiveservices-ocr/hooks/vue-query.ts' },
  'svelte-query': { output: './src/microsoft-cognitiveservices-ocr/hooks/svelte-query.ts' },
  'angular-query': { output: './src/microsoft-cognitiveservices-ocr/hooks/angular-query.ts' },
  docs: {
    output: './src/microsoft-cognitiveservices-ocr/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
