import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/igrmaharashtra/3.0.0/openapi.yaml',
  output: './src/igrmaharashtra/routes.ts',
  template: {},
  type: { output: './src/igrmaharashtra/types.ts' },
  client: { output: './src/igrmaharashtra/client.ts', baseUrl: '/' },
  rpc: { output: './src/igrmaharashtra/rpc.ts', parseResponse: true },
  swr: { output: './src/igrmaharashtra/hooks/swr.ts' },
  'tanstack-query': { output: './src/igrmaharashtra/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/igrmaharashtra/hooks/preact-query.ts' },
  'solid-query': { output: './src/igrmaharashtra/hooks/solid-query.ts' },
  'vue-query': { output: './src/igrmaharashtra/hooks/vue-query.ts' },
  'svelte-query': { output: './src/igrmaharashtra/hooks/svelte-query.ts' },
  'angular-query': { output: './src/igrmaharashtra/hooks/angular-query.ts' },
  docs: {
    output: './src/igrmaharashtra/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
