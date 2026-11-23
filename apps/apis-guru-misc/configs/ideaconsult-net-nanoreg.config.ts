import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ideaconsult.net/nanoreg/4.0.0/openapi.yaml',
  output: './src/ideaconsult-net-nanoreg/routes.ts',
  template: {},
  type: { output: './src/ideaconsult-net-nanoreg/types.ts' },
  client: { output: './src/ideaconsult-net-nanoreg/client.ts', baseUrl: '/' },
  rpc: { output: './src/ideaconsult-net-nanoreg/rpc.ts', parseResponse: true },
  swr: { output: './src/ideaconsult-net-nanoreg/hooks/swr.ts' },
  'tanstack-query': { output: './src/ideaconsult-net-nanoreg/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ideaconsult-net-nanoreg/hooks/preact-query.ts' },
  'solid-query': { output: './src/ideaconsult-net-nanoreg/hooks/solid-query.ts' },
  'vue-query': { output: './src/ideaconsult-net-nanoreg/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ideaconsult-net-nanoreg/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ideaconsult-net-nanoreg/hooks/angular-query.ts' },
  docs: {
    output: './src/ideaconsult-net-nanoreg/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
