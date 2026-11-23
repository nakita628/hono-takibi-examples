import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/rekognition/2016-06-27/openapi.yaml',
  output: './src/rekognition/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/rekognition/types.ts' },
  client: { output: './src/rekognition/client.ts', baseUrl: '/' },
  rpc: { output: './src/rekognition/rpc.ts', parseResponse: true },
  swr: { output: './src/rekognition/hooks/swr.ts' },
  'tanstack-query': { output: './src/rekognition/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/rekognition/hooks/preact-query.ts' },
  'solid-query': { output: './src/rekognition/hooks/solid-query.ts' },
  'vue-query': { output: './src/rekognition/hooks/vue-query.ts' },
  'svelte-query': { output: './src/rekognition/hooks/svelte-query.ts' },
  'angular-query': { output: './src/rekognition/hooks/angular-query.ts' },
  docs: {
    output: './src/rekognition/api.md',
    curl: true,
    baseUrl: 'https://rekognition.us-east-1.amazonaws.com',
  },
})
