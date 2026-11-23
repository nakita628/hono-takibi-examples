import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/secretsmanager/2017-10-17/openapi.yaml',
  output: './src/secretsmanager/routes.ts',
  template: {},
  type: { output: './src/secretsmanager/types.ts' },
  client: { output: './src/secretsmanager/client.ts', baseUrl: '/' },
  rpc: { output: './src/secretsmanager/rpc.ts', parseResponse: true },
  swr: { output: './src/secretsmanager/hooks/swr.ts' },
  'tanstack-query': { output: './src/secretsmanager/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/secretsmanager/hooks/preact-query.ts' },
  'solid-query': { output: './src/secretsmanager/hooks/solid-query.ts' },
  'vue-query': { output: './src/secretsmanager/hooks/vue-query.ts' },
  'svelte-query': { output: './src/secretsmanager/hooks/svelte-query.ts' },
  'angular-query': { output: './src/secretsmanager/hooks/angular-query.ts' },
  docs: {
    output: './src/secretsmanager/api.md',
    curl: true,
    baseUrl: 'https://secretsmanager.us-east-1.amazonaws.com',
  },
})
