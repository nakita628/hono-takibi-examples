import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/ditarunachal/3.0.0/openapi.yaml',
  output: './src/ditarunachal/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ditarunachal/types.ts' },
  client: { output: './src/ditarunachal/client.ts', baseUrl: '/' },
  rpc: { output: './src/ditarunachal/rpc.ts', parseResponse: true },
  swr: { output: './src/ditarunachal/hooks/swr.ts' },
  'tanstack-query': { output: './src/ditarunachal/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ditarunachal/hooks/preact-query.ts' },
  'solid-query': { output: './src/ditarunachal/hooks/solid-query.ts' },
  'vue-query': { output: './src/ditarunachal/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ditarunachal/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ditarunachal/hooks/angular-query.ts' },
  docs: {
    output: './src/ditarunachal/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
