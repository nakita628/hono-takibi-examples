import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/youtubeAnalytics/v1/openapi.yaml',
  output: './src/youtubeanalytics/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/youtubeanalytics/types.ts' },
  client: { output: './src/youtubeanalytics/client.ts', baseUrl: '/' },
  rpc: { output: './src/youtubeanalytics/rpc.ts', parseResponse: true },
  swr: { output: './src/youtubeanalytics/hooks/swr.ts' },
  'tanstack-query': { output: './src/youtubeanalytics/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/youtubeanalytics/hooks/preact-query.ts' },
  'solid-query': { output: './src/youtubeanalytics/hooks/solid-query.ts' },
  'vue-query': { output: './src/youtubeanalytics/hooks/vue-query.ts' },
  'svelte-query': { output: './src/youtubeanalytics/hooks/svelte-query.ts' },
  'angular-query': { output: './src/youtubeanalytics/hooks/angular-query.ts' },
  docs: {
    output: './src/youtubeanalytics/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
