import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/ecs/2014-11-13/openapi.yaml',
  output: './src/ecs/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ecs/types.ts' },
  client: { output: './src/ecs/client.ts', baseUrl: '/' },
  rpc: { output: './src/ecs/rpc.ts', parseResponse: true },
  swr: { output: './src/ecs/hooks/swr.ts' },
  'tanstack-query': { output: './src/ecs/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ecs/hooks/preact-query.ts' },
  'solid-query': { output: './src/ecs/hooks/solid-query.ts' },
  'vue-query': { output: './src/ecs/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ecs/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ecs/hooks/angular-query.ts' },
  docs: {
    output: './src/ecs/api.md',
    curl: true,
    baseUrl: 'https://ecs.us-east-1.amazonaws.com',
  },
})
