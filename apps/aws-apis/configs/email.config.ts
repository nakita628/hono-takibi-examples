import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/email/2010-12-01/openapi.yaml',
  output: './src/email/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/email/types.ts' },
  client: { output: './src/email/client.ts', baseUrl: '/' },
  rpc: { output: './src/email/rpc.ts', parseResponse: true },
  swr: { output: './src/email/hooks/swr.ts' },
  'tanstack-query': { output: './src/email/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/email/hooks/preact-query.ts' },
  'solid-query': { output: './src/email/hooks/solid-query.ts' },
  'vue-query': { output: './src/email/hooks/vue-query.ts' },
  'svelte-query': { output: './src/email/hooks/svelte-query.ts' },
  'angular-query': { output: './src/email/hooks/angular-query.ts' },
  docs: {
    output: './src/email/api.md',
    curl: true,
    baseUrl: 'https://email.us-east-1.amazonaws.com',
  },
})
