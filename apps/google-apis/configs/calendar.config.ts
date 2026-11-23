import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/calendar/v3/openapi.yaml',
  output: './src/calendar/routes.ts',
  template: {},
  type: { output: './src/calendar/types.ts' },
  client: { output: './src/calendar/client.ts', baseUrl: '/' },
  rpc: { output: './src/calendar/rpc.ts', parseResponse: true },
  swr: { output: './src/calendar/hooks/swr.ts' },
  'tanstack-query': { output: './src/calendar/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/calendar/hooks/preact-query.ts' },
  'solid-query': { output: './src/calendar/hooks/solid-query.ts' },
  'vue-query': { output: './src/calendar/hooks/vue-query.ts' },
  'svelte-query': { output: './src/calendar/hooks/svelte-query.ts' },
  'angular-query': { output: './src/calendar/hooks/angular-query.ts' },
  docs: {
    output: './src/calendar/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
