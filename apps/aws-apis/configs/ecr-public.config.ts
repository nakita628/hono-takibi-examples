import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/ecr-public/2020-10-30/openapi.yaml',
  output: './src/ecr-public/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ecr-public/types.ts' },
  client: { output: './src/ecr-public/client.ts', baseUrl: '/' },
  rpc: { output: './src/ecr-public/rpc.ts', parseResponse: true },
  swr: { output: './src/ecr-public/hooks/swr.ts' },
  'tanstack-query': { output: './src/ecr-public/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ecr-public/hooks/preact-query.ts' },
  'solid-query': { output: './src/ecr-public/hooks/solid-query.ts' },
  'vue-query': { output: './src/ecr-public/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ecr-public/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ecr-public/hooks/angular-query.ts' },
  docs: {
    output: './src/ecr-public/api.md',
    curl: true,
    baseUrl: 'https://ecr-public.us-east-1.amazonaws.com',
  },
})
