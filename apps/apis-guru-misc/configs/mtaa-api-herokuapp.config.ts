import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mtaa-api.herokuapp.com/1.0/openapi.yaml',
  output: './src/mtaa-api-herokuapp/routes.ts',
  template: {},
  type: { output: './src/mtaa-api-herokuapp/types.ts' },
  client: { output: './src/mtaa-api-herokuapp/client.ts', baseUrl: '/' },
  rpc: { output: './src/mtaa-api-herokuapp/rpc.ts', parseResponse: true },
  swr: { output: './src/mtaa-api-herokuapp/hooks/swr.ts' },
  'tanstack-query': { output: './src/mtaa-api-herokuapp/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mtaa-api-herokuapp/hooks/preact-query.ts' },
  'solid-query': { output: './src/mtaa-api-herokuapp/hooks/solid-query.ts' },
  'vue-query': { output: './src/mtaa-api-herokuapp/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mtaa-api-herokuapp/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mtaa-api-herokuapp/hooks/angular-query.ts' },
  docs: {
    output: './src/mtaa-api-herokuapp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
