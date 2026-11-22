import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/servicecontrol/v2/openapi.yaml',
  output: './src/servicecontrol/routes.ts',
  template: {},
  type: { output: './src/servicecontrol/types.ts' },
  client: { output: './src/servicecontrol/client.ts', baseUrl: '/' },
  rpc: { output: './src/servicecontrol/rpc.ts', parseResponse: true },
  swr: { output: './src/servicecontrol/hooks/swr.ts' },
  'tanstack-query': { output: './src/servicecontrol/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/servicecontrol/hooks/preact-query.ts' },
  'solid-query': { output: './src/servicecontrol/hooks/solid-query.ts' },
  'vue-query': { output: './src/servicecontrol/hooks/vue-query.ts' },
  'svelte-query': { output: './src/servicecontrol/hooks/svelte-query.ts' },
  'angular-query': { output: './src/servicecontrol/hooks/angular-query.ts' },
  docs: {
    output: './src/servicecontrol/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
