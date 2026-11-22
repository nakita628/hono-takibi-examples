import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/ecr/2015-09-21/openapi.yaml',
  output: './src/ecr/routes.ts',
  template: {},
  type: { output: './src/ecr/types.ts' },
  client: { output: './src/ecr/client.ts', baseUrl: '/' },
  rpc: { output: './src/ecr/rpc.ts', parseResponse: true },
  swr: { output: './src/ecr/hooks/swr.ts' },
  'tanstack-query': { output: './src/ecr/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ecr/hooks/preact-query.ts' },
  'solid-query': { output: './src/ecr/hooks/solid-query.ts' },
  'vue-query': { output: './src/ecr/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ecr/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ecr/hooks/angular-query.ts' },
  docs: {
    output: './src/ecr/api.md',
    curl: true,
    baseUrl: 'https://ecr.us-east-1.amazonaws.com',
  },
})
