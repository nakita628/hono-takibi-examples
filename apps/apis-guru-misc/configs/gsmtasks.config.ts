import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gsmtasks.com/2.4.13/openapi.yaml',
  output: './src/gsmtasks/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/gsmtasks/types.ts' },
  client: { output: './src/gsmtasks/client.ts', baseUrl: '/' },
  rpc: { output: './src/gsmtasks/rpc.ts', parseResponse: true },
  swr: { output: './src/gsmtasks/hooks/swr.ts' },
  'tanstack-query': { output: './src/gsmtasks/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/gsmtasks/hooks/preact-query.ts' },
  'solid-query': { output: './src/gsmtasks/hooks/solid-query.ts' },
  'vue-query': { output: './src/gsmtasks/hooks/vue-query.ts' },
  'svelte-query': { output: './src/gsmtasks/hooks/svelte-query.ts' },
  'angular-query': { output: './src/gsmtasks/hooks/angular-query.ts' },
  docs: {
    output: './src/gsmtasks/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
