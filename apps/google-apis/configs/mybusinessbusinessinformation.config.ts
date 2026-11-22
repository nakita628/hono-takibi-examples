import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/mybusinessbusinessinformation/v1/openapi.yaml',
  output: './src/mybusinessbusinessinformation/routes.ts',
  template: {},
  type: { output: './src/mybusinessbusinessinformation/types.ts' },
  client: { output: './src/mybusinessbusinessinformation/client.ts', baseUrl: '/' },
  rpc: { output: './src/mybusinessbusinessinformation/rpc.ts', parseResponse: true },
  swr: { output: './src/mybusinessbusinessinformation/hooks/swr.ts' },
  'tanstack-query': { output: './src/mybusinessbusinessinformation/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mybusinessbusinessinformation/hooks/preact-query.ts' },
  'solid-query': { output: './src/mybusinessbusinessinformation/hooks/solid-query.ts' },
  'vue-query': { output: './src/mybusinessbusinessinformation/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mybusinessbusinessinformation/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mybusinessbusinessinformation/hooks/angular-query.ts' },
  docs: {
    output: './src/mybusinessbusinessinformation/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
