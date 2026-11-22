import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/groupssettings/v1/openapi.yaml',
  output: './src/groupssettings/routes.ts',
  template: {},
  type: { output: './src/groupssettings/types.ts' },
  client: { output: './src/groupssettings/client.ts', baseUrl: '/' },
  rpc: { output: './src/groupssettings/rpc.ts', parseResponse: true },
  swr: { output: './src/groupssettings/hooks/swr.ts' },
  'tanstack-query': { output: './src/groupssettings/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/groupssettings/hooks/preact-query.ts' },
  'solid-query': { output: './src/groupssettings/hooks/solid-query.ts' },
  'vue-query': { output: './src/groupssettings/hooks/vue-query.ts' },
  'svelte-query': { output: './src/groupssettings/hooks/svelte-query.ts' },
  'angular-query': { output: './src/groupssettings/hooks/angular-query.ts' },
  docs: {
    output: './src/groupssettings/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
