import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/worldtimeapi.org/20210108/openapi.yaml',
  output: './src/worldtimeapi-org/routes.ts',
  template: {},
  type: { output: './src/worldtimeapi-org/types.ts' },
  client: { output: './src/worldtimeapi-org/client.ts', baseUrl: '/' },
  rpc: { output: './src/worldtimeapi-org/rpc.ts', parseResponse: true },
  swr: { output: './src/worldtimeapi-org/hooks/swr.ts' },
  'tanstack-query': { output: './src/worldtimeapi-org/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/worldtimeapi-org/hooks/preact-query.ts' },
  'solid-query': { output: './src/worldtimeapi-org/hooks/solid-query.ts' },
  'vue-query': { output: './src/worldtimeapi-org/hooks/vue-query.ts' },
  'svelte-query': { output: './src/worldtimeapi-org/hooks/svelte-query.ts' },
  'angular-query': { output: './src/worldtimeapi-org/hooks/angular-query.ts' },
  docs: {
    output: './src/worldtimeapi-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
