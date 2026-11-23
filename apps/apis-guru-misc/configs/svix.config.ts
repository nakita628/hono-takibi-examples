import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/svix.com/1.4/openapi.yaml',
  output: './src/svix/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/svix/types.ts' },
  client: { output: './src/svix/client.ts', baseUrl: '/' },
  rpc: { output: './src/svix/rpc.ts', parseResponse: true },
  swr: { output: './src/svix/hooks/swr.ts' },
  'tanstack-query': { output: './src/svix/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/svix/hooks/preact-query.ts' },
  'solid-query': { output: './src/svix/hooks/solid-query.ts' },
  'vue-query': { output: './src/svix/hooks/vue-query.ts' },
  'svelte-query': { output: './src/svix/hooks/svelte-query.ts' },
  'angular-query': { output: './src/svix/hooks/angular-query.ts' },
  docs: {
    output: './src/svix/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
