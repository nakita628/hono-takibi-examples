import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/apmcservices/3.0.0/openapi.yaml',
  output: './src/apmcservices/routes.ts',
  template: {},
  type: { output: './src/apmcservices/types.ts' },
  client: { output: './src/apmcservices/client.ts', baseUrl: '/' },
  rpc: { output: './src/apmcservices/rpc.ts', parseResponse: true },
  swr: { output: './src/apmcservices/hooks/swr.ts' },
  'tanstack-query': { output: './src/apmcservices/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/apmcservices/hooks/preact-query.ts' },
  'solid-query': { output: './src/apmcservices/hooks/solid-query.ts' },
  'vue-query': { output: './src/apmcservices/hooks/vue-query.ts' },
  'svelte-query': { output: './src/apmcservices/hooks/svelte-query.ts' },
  'angular-query': { output: './src/apmcservices/hooks/angular-query.ts' },
  docs: {
    output: './src/apmcservices/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
