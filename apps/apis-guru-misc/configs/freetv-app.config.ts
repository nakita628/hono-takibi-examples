import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/freetv-app.com/v1/openapi.yaml',
  output: './src/freetv-app/routes.ts',
  template: {},
  type: { output: './src/freetv-app/types.ts' },
  client: { output: './src/freetv-app/client.ts', baseUrl: '/' },
  rpc: { output: './src/freetv-app/rpc.ts', parseResponse: true },
  swr: { output: './src/freetv-app/hooks/swr.ts' },
  'tanstack-query': { output: './src/freetv-app/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/freetv-app/hooks/preact-query.ts' },
  'solid-query': { output: './src/freetv-app/hooks/solid-query.ts' },
  'vue-query': { output: './src/freetv-app/hooks/vue-query.ts' },
  'svelte-query': { output: './src/freetv-app/hooks/svelte-query.ts' },
  'angular-query': { output: './src/freetv-app/hooks/angular-query.ts' },
  docs: {
    output: './src/freetv-app/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
