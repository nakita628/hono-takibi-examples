import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/calorieninjas.com/1.0.0/openapi.yaml',
  output: './src/calorieninjas/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/calorieninjas/types.ts' },
  client: { output: './src/calorieninjas/client.ts', baseUrl: '/' },
  rpc: { output: './src/calorieninjas/rpc.ts', parseResponse: true },
  swr: { output: './src/calorieninjas/hooks/swr.ts' },
  'tanstack-query': { output: './src/calorieninjas/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/calorieninjas/hooks/preact-query.ts' },
  'solid-query': { output: './src/calorieninjas/hooks/solid-query.ts' },
  'vue-query': { output: './src/calorieninjas/hooks/vue-query.ts' },
  'svelte-query': { output: './src/calorieninjas/hooks/svelte-query.ts' },
  'angular-query': { output: './src/calorieninjas/hooks/angular-query.ts' },
  docs: {
    output: './src/calorieninjas/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
