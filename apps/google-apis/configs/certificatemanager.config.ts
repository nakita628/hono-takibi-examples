import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/certificatemanager/v1/openapi.yaml',
  output: './src/certificatemanager/routes.ts',
  template: {},
  type: { output: './src/certificatemanager/types.ts' },
  client: { output: './src/certificatemanager/client.ts', baseUrl: '/' },
  rpc: { output: './src/certificatemanager/rpc.ts', parseResponse: true },
  swr: { output: './src/certificatemanager/hooks/swr.ts' },
  'tanstack-query': { output: './src/certificatemanager/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/certificatemanager/hooks/preact-query.ts' },
  'solid-query': { output: './src/certificatemanager/hooks/solid-query.ts' },
  'vue-query': { output: './src/certificatemanager/hooks/vue-query.ts' },
  'svelte-query': { output: './src/certificatemanager/hooks/svelte-query.ts' },
  'angular-query': { output: './src/certificatemanager/hooks/angular-query.ts' },
  docs: {
    output: './src/certificatemanager/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
