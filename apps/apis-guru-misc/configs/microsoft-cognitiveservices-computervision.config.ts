import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/microsoft.com/cognitiveservices-ComputerVision/2.1/openapi.yaml',
  output: './src/microsoft-cognitiveservices-computervision/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/microsoft-cognitiveservices-computervision/types.ts' },
  client: { output: './src/microsoft-cognitiveservices-computervision/client.ts', baseUrl: '/' },
  rpc: { output: './src/microsoft-cognitiveservices-computervision/rpc.ts', parseResponse: true },
  swr: { output: './src/microsoft-cognitiveservices-computervision/hooks/swr.ts' },
  'tanstack-query': { output: './src/microsoft-cognitiveservices-computervision/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/microsoft-cognitiveservices-computervision/hooks/preact-query.ts' },
  'solid-query': { output: './src/microsoft-cognitiveservices-computervision/hooks/solid-query.ts' },
  'vue-query': { output: './src/microsoft-cognitiveservices-computervision/hooks/vue-query.ts' },
  'svelte-query': { output: './src/microsoft-cognitiveservices-computervision/hooks/svelte-query.ts' },
  'angular-query': { output: './src/microsoft-cognitiveservices-computervision/hooks/angular-query.ts' },
  docs: {
    output: './src/microsoft-cognitiveservices-computervision/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
