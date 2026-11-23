import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/weather_status/openapi.json',
  output: './src/weather-status/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/weather-status/types.ts' },
  client: { output: './src/weather-status/client.ts', baseUrl: '/' },
  rpc: { output: './src/weather-status/rpc.ts', parseResponse: true },
  swr: { output: './src/weather-status/hooks/swr.ts' },
  'tanstack-query': { output: './src/weather-status/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/weather-status/hooks/preact-query.ts' },
  'solid-query': { output: './src/weather-status/hooks/solid-query.ts' },
  'vue-query': { output: './src/weather-status/hooks/vue-query.ts' },
  'svelte-query': { output: './src/weather-status/hooks/svelte-query.ts' },
  'angular-query': { output: './src/weather-status/hooks/angular-query.ts' },
  docs: {
    output: './src/weather-status/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
