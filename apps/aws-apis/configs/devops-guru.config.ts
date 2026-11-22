import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/devops-guru/2020-12-01/openapi.yaml',
  output: './src/devops-guru/routes.ts',
  template: {},
  type: { output: './src/devops-guru/types.ts' },
  client: { output: './src/devops-guru/client.ts', baseUrl: '/' },
  rpc: { output: './src/devops-guru/rpc.ts', parseResponse: true },
  swr: { output: './src/devops-guru/hooks/swr.ts' },
  'tanstack-query': { output: './src/devops-guru/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/devops-guru/hooks/preact-query.ts' },
  'solid-query': { output: './src/devops-guru/hooks/solid-query.ts' },
  'vue-query': { output: './src/devops-guru/hooks/vue-query.ts' },
  'svelte-query': { output: './src/devops-guru/hooks/svelte-query.ts' },
  'angular-query': { output: './src/devops-guru/hooks/angular-query.ts' },
  docs: {
    output: './src/devops-guru/api.md',
    curl: true,
    baseUrl: 'https://devops-guru.us-east-1.amazonaws.com',
  },
})
