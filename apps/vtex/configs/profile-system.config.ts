import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Profile-System/1.0/openapi.yaml',
  output: './src/profile-system/routes.ts',
  template: {},
  type: { output: './src/profile-system/types.ts' },
  client: { output: './src/profile-system/client.ts', baseUrl: '/' },
  rpc: { output: './src/profile-system/rpc.ts', parseResponse: true },
  swr: { output: './src/profile-system/hooks/swr.ts' },
  'tanstack-query': { output: './src/profile-system/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/profile-system/hooks/preact-query.ts' },
  'solid-query': { output: './src/profile-system/hooks/solid-query.ts' },
  'vue-query': { output: './src/profile-system/hooks/vue-query.ts' },
  'svelte-query': { output: './src/profile-system/hooks/svelte-query.ts' },
  'angular-query': { output: './src/profile-system/hooks/angular-query.ts' },
  docs: {
    output: './src/profile-system/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
