import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vercel.com/0.0.1/openapi.yaml',
  output: './src/vercel/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/vercel/types.ts' },
  client: { output: './src/vercel/client.ts', baseUrl: '/' },
  rpc: { output: './src/vercel/rpc.ts', parseResponse: true },
  swr: { output: './src/vercel/hooks/swr.ts' },
  'tanstack-query': { output: './src/vercel/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/vercel/hooks/preact-query.ts' },
  'solid-query': { output: './src/vercel/hooks/solid-query.ts' },
  'vue-query': { output: './src/vercel/hooks/vue-query.ts' },
  'svelte-query': { output: './src/vercel/hooks/svelte-query.ts' },
  'angular-query': { output: './src/vercel/hooks/angular-query.ts' },
  docs: {
    output: './src/vercel/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
