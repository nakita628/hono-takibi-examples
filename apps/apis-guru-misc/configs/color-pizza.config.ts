import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/color.pizza/1.0.0/openapi.yaml',
  output: './src/color-pizza/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/color-pizza/types.ts' },
  client: { output: './src/color-pizza/client.ts', baseUrl: '/' },
  rpc: { output: './src/color-pizza/rpc.ts', parseResponse: true },
  swr: { output: './src/color-pizza/hooks/swr.ts' },
  'tanstack-query': { output: './src/color-pizza/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/color-pizza/hooks/preact-query.ts' },
  'solid-query': { output: './src/color-pizza/hooks/solid-query.ts' },
  'vue-query': { output: './src/color-pizza/hooks/vue-query.ts' },
  'svelte-query': { output: './src/color-pizza/hooks/svelte-query.ts' },
  'angular-query': { output: './src/color-pizza/hooks/angular-query.ts' },
  docs: {
    output: './src/color-pizza/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
