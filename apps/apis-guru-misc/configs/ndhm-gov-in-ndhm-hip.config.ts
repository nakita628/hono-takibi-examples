import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ndhm.gov.in/ndhm-hip/0.5/openapi.yaml',
  output: './src/ndhm-gov-in-ndhm-hip/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ndhm-gov-in-ndhm-hip/types.ts' },
  client: { output: './src/ndhm-gov-in-ndhm-hip/client.ts', baseUrl: '/' },
  rpc: { output: './src/ndhm-gov-in-ndhm-hip/rpc.ts', parseResponse: true },
  swr: { output: './src/ndhm-gov-in-ndhm-hip/hooks/swr.ts' },
  'tanstack-query': { output: './src/ndhm-gov-in-ndhm-hip/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ndhm-gov-in-ndhm-hip/hooks/preact-query.ts' },
  'solid-query': { output: './src/ndhm-gov-in-ndhm-hip/hooks/solid-query.ts' },
  'vue-query': { output: './src/ndhm-gov-in-ndhm-hip/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ndhm-gov-in-ndhm-hip/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ndhm-gov-in-ndhm-hip/hooks/angular-query.ts' },
  docs: {
    output: './src/ndhm-gov-in-ndhm-hip/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
