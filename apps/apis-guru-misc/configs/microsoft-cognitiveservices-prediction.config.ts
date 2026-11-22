import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/microsoft.com/cognitiveservices-Prediction/3.0/openapi.yaml',
  output: './src/microsoft-cognitiveservices-prediction/routes.ts',
  template: {},
  type: { output: './src/microsoft-cognitiveservices-prediction/types.ts' },
  client: { output: './src/microsoft-cognitiveservices-prediction/client.ts', baseUrl: '/' },
  rpc: { output: './src/microsoft-cognitiveservices-prediction/rpc.ts', parseResponse: true },
  swr: { output: './src/microsoft-cognitiveservices-prediction/hooks/swr.ts' },
  'tanstack-query': { output: './src/microsoft-cognitiveservices-prediction/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/microsoft-cognitiveservices-prediction/hooks/preact-query.ts' },
  'solid-query': { output: './src/microsoft-cognitiveservices-prediction/hooks/solid-query.ts' },
  'vue-query': { output: './src/microsoft-cognitiveservices-prediction/hooks/vue-query.ts' },
  'svelte-query': { output: './src/microsoft-cognitiveservices-prediction/hooks/svelte-query.ts' },
  'angular-query': { output: './src/microsoft-cognitiveservices-prediction/hooks/angular-query.ts' },
  docs: {
    output: './src/microsoft-cognitiveservices-prediction/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
