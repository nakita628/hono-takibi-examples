import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/api2pdf.com/1.0.0/openapi.yaml',
  output: './src/api2pdf/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/api2pdf/types.ts' },
  client: { output: './src/api2pdf/client.ts', baseUrl: '/' },
  rpc: { output: './src/api2pdf/rpc.ts', parseResponse: true },
  swr: { output: './src/api2pdf/hooks/swr.ts' },
  'tanstack-query': { output: './src/api2pdf/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/api2pdf/hooks/preact-query.ts' },
  'solid-query': { output: './src/api2pdf/hooks/solid-query.ts' },
  'vue-query': { output: './src/api2pdf/hooks/vue-query.ts' },
  'svelte-query': { output: './src/api2pdf/hooks/svelte-query.ts' },
  'angular-query': { output: './src/api2pdf/hooks/angular-query.ts' },
  docs: {
    output: './src/api2pdf/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
