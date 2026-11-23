import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/sendgrid.com/1.0.0/openapi.yaml',
  output: './src/sendgrid/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sendgrid/types.ts' },
  client: { output: './src/sendgrid/client.ts', baseUrl: '/' },
  rpc: { output: './src/sendgrid/rpc.ts', parseResponse: true },
  swr: { output: './src/sendgrid/hooks/swr.ts' },
  'tanstack-query': { output: './src/sendgrid/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sendgrid/hooks/preact-query.ts' },
  'solid-query': { output: './src/sendgrid/hooks/solid-query.ts' },
  'vue-query': { output: './src/sendgrid/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sendgrid/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sendgrid/hooks/angular-query.ts' },
  docs: {
    output: './src/sendgrid/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
