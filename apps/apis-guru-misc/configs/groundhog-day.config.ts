import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/groundhog-day.com/1.2.1/openapi.yaml',
  output: './src/groundhog-day/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/groundhog-day/types.ts' },
  client: { output: './src/groundhog-day/client.ts', baseUrl: '/' },
  rpc: { output: './src/groundhog-day/rpc.ts', parseResponse: true },
  swr: { output: './src/groundhog-day/hooks/swr.ts' },
  'tanstack-query': { output: './src/groundhog-day/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/groundhog-day/hooks/preact-query.ts' },
  'solid-query': { output: './src/groundhog-day/hooks/solid-query.ts' },
  'vue-query': { output: './src/groundhog-day/hooks/vue-query.ts' },
  'svelte-query': { output: './src/groundhog-day/hooks/svelte-query.ts' },
  'angular-query': { output: './src/groundhog-day/hooks/angular-query.ts' },
  docs: {
    output: './src/groundhog-day/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
