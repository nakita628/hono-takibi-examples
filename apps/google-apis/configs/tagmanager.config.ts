import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/tagmanager/v2/openapi.yaml',
  output: './src/tagmanager/routes.ts',
  template: {},
  type: { output: './src/tagmanager/types.ts' },
  client: { output: './src/tagmanager/client.ts', baseUrl: '/' },
  rpc: { output: './src/tagmanager/rpc.ts', parseResponse: true },
  swr: { output: './src/tagmanager/hooks/swr.ts' },
  'tanstack-query': { output: './src/tagmanager/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/tagmanager/hooks/preact-query.ts' },
  'solid-query': { output: './src/tagmanager/hooks/solid-query.ts' },
  'vue-query': { output: './src/tagmanager/hooks/vue-query.ts' },
  'svelte-query': { output: './src/tagmanager/hooks/svelte-query.ts' },
  'angular-query': { output: './src/tagmanager/hooks/angular-query.ts' },
  docs: {
    output: './src/tagmanager/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
