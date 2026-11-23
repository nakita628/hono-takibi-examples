import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/calendar/v3/openapi.yaml',
  output: './src/calendar-v3/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/calendar-v3/types.ts' },
  client: { output: './src/calendar-v3/client.ts', baseUrl: '/' },
  rpc: { output: './src/calendar-v3/rpc.ts', parseResponse: true },
  swr: { output: './src/calendar-v3/hooks/swr.ts' },
  'tanstack-query': { output: './src/calendar-v3/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/calendar-v3/hooks/preact-query.ts' },
  'solid-query': { output: './src/calendar-v3/hooks/solid-query.ts' },
  'vue-query': { output: './src/calendar-v3/hooks/vue-query.ts' },
  'svelte-query': { output: './src/calendar-v3/hooks/svelte-query.ts' },
  'angular-query': { output: './src/calendar-v3/hooks/angular-query.ts' },
  docs: {
    output: './src/calendar-v3/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com/calendar/v3',
  },
})
