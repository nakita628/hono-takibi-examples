import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/mybusinessbusinesscalls/v1/openapi.yaml',
  output: './src/mybusinessbusinesscalls/routes.ts',
  template: {},
  type: { output: './src/mybusinessbusinesscalls/types.ts' },
  client: { output: './src/mybusinessbusinesscalls/client.ts', baseUrl: '/' },
  rpc: { output: './src/mybusinessbusinesscalls/rpc.ts', parseResponse: true },
  swr: { output: './src/mybusinessbusinesscalls/hooks/swr.ts' },
  'tanstack-query': { output: './src/mybusinessbusinesscalls/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mybusinessbusinesscalls/hooks/preact-query.ts' },
  'solid-query': { output: './src/mybusinessbusinesscalls/hooks/solid-query.ts' },
  'vue-query': { output: './src/mybusinessbusinesscalls/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mybusinessbusinesscalls/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mybusinessbusinesscalls/hooks/angular-query.ts' },
  docs: {
    output: './src/mybusinessbusinesscalls/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
