import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/legalmetrologyup/3.0.0/openapi.yaml',
  output: './src/legalmetrologyup/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/legalmetrologyup/types.ts' },
  client: { output: './src/legalmetrologyup/client.ts', baseUrl: '/' },
  rpc: { output: './src/legalmetrologyup/rpc.ts', parseResponse: true },
  swr: { output: './src/legalmetrologyup/hooks/swr.ts' },
  'tanstack-query': { output: './src/legalmetrologyup/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/legalmetrologyup/hooks/preact-query.ts' },
  'solid-query': { output: './src/legalmetrologyup/hooks/solid-query.ts' },
  'vue-query': { output: './src/legalmetrologyup/hooks/vue-query.ts' },
  'svelte-query': { output: './src/legalmetrologyup/hooks/svelte-query.ts' },
  'angular-query': { output: './src/legalmetrologyup/hooks/angular-query.ts' },
  docs: {
    output: './src/legalmetrologyup/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
