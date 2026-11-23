import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/microsoft.com/cognitiveservices-Training/3.2/openapi.yaml',
  output: './src/microsoft-cognitiveservices-training/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/microsoft-cognitiveservices-training/types.ts' },
  client: { output: './src/microsoft-cognitiveservices-training/client.ts', baseUrl: '/' },
  rpc: { output: './src/microsoft-cognitiveservices-training/rpc.ts', parseResponse: true },
  swr: { output: './src/microsoft-cognitiveservices-training/hooks/swr.ts' },
  'tanstack-query': { output: './src/microsoft-cognitiveservices-training/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/microsoft-cognitiveservices-training/hooks/preact-query.ts' },
  'solid-query': { output: './src/microsoft-cognitiveservices-training/hooks/solid-query.ts' },
  'vue-query': { output: './src/microsoft-cognitiveservices-training/hooks/vue-query.ts' },
  'svelte-query': { output: './src/microsoft-cognitiveservices-training/hooks/svelte-query.ts' },
  'angular-query': { output: './src/microsoft-cognitiveservices-training/hooks/angular-query.ts' },
  docs: {
    output: './src/microsoft-cognitiveservices-training/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
