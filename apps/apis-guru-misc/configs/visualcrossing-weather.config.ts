import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/visualcrossing.com/weather/4.6/openapi.yaml',
  output: './src/visualcrossing-weather/routes.ts',
  template: {},
  type: { output: './src/visualcrossing-weather/types.ts' },
  client: { output: './src/visualcrossing-weather/client.ts', baseUrl: '/' },
  rpc: { output: './src/visualcrossing-weather/rpc.ts', parseResponse: true },
  swr: { output: './src/visualcrossing-weather/hooks/swr.ts' },
  'tanstack-query': { output: './src/visualcrossing-weather/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/visualcrossing-weather/hooks/preact-query.ts' },
  'solid-query': { output: './src/visualcrossing-weather/hooks/solid-query.ts' },
  'vue-query': { output: './src/visualcrossing-weather/hooks/vue-query.ts' },
  'svelte-query': { output: './src/visualcrossing-weather/hooks/svelte-query.ts' },
  'angular-query': { output: './src/visualcrossing-weather/hooks/angular-query.ts' },
  docs: {
    output: './src/visualcrossing-weather/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
