import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/mybusinessverifications/v1/openapi.yaml',
  output: './src/mybusinessverifications/routes.ts',
  template: {},
  type: { output: './src/mybusinessverifications/types.ts' },
  client: { output: './src/mybusinessverifications/client.ts', baseUrl: '/' },
  rpc: { output: './src/mybusinessverifications/rpc.ts', parseResponse: true },
  swr: { output: './src/mybusinessverifications/hooks/swr.ts' },
  'tanstack-query': { output: './src/mybusinessverifications/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mybusinessverifications/hooks/preact-query.ts' },
  'solid-query': { output: './src/mybusinessverifications/hooks/solid-query.ts' },
  'vue-query': { output: './src/mybusinessverifications/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mybusinessverifications/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mybusinessverifications/hooks/angular-query.ts' },
  docs: {
    output: './src/mybusinessverifications/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
