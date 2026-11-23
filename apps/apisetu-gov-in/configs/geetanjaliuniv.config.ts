import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/geetanjaliuniv/3.0.0/openapi.yaml',
  output: './src/geetanjaliuniv/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/geetanjaliuniv/types.ts' },
  client: { output: './src/geetanjaliuniv/client.ts', baseUrl: '/' },
  rpc: { output: './src/geetanjaliuniv/rpc.ts', parseResponse: true },
  swr: { output: './src/geetanjaliuniv/hooks/swr.ts' },
  'tanstack-query': { output: './src/geetanjaliuniv/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/geetanjaliuniv/hooks/preact-query.ts' },
  'solid-query': { output: './src/geetanjaliuniv/hooks/solid-query.ts' },
  'vue-query': { output: './src/geetanjaliuniv/hooks/vue-query.ts' },
  'svelte-query': { output: './src/geetanjaliuniv/hooks/svelte-query.ts' },
  'angular-query': { output: './src/geetanjaliuniv/hooks/angular-query.ts' },
  docs: {
    output: './src/geetanjaliuniv/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
