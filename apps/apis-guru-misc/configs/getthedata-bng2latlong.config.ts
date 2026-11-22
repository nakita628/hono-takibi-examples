import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/getthedata.com/bng2latlong/1.0/openapi.yaml',
  output: './src/getthedata-bng2latlong/routes.ts',
  template: {},
  type: { output: './src/getthedata-bng2latlong/types.ts' },
  client: { output: './src/getthedata-bng2latlong/client.ts', baseUrl: '/' },
  rpc: { output: './src/getthedata-bng2latlong/rpc.ts', parseResponse: true },
  swr: { output: './src/getthedata-bng2latlong/hooks/swr.ts' },
  'tanstack-query': { output: './src/getthedata-bng2latlong/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/getthedata-bng2latlong/hooks/preact-query.ts' },
  'solid-query': { output: './src/getthedata-bng2latlong/hooks/solid-query.ts' },
  'vue-query': { output: './src/getthedata-bng2latlong/hooks/vue-query.ts' },
  'svelte-query': { output: './src/getthedata-bng2latlong/hooks/svelte-query.ts' },
  'angular-query': { output: './src/getthedata-bng2latlong/hooks/angular-query.ts' },
  docs: {
    output: './src/getthedata-bng2latlong/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
