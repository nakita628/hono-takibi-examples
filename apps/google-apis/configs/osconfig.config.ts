import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/osconfig/v1beta/openapi.yaml',
  output: './src/osconfig/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/osconfig/types.ts' },
  client: { output: './src/osconfig/client.ts', baseUrl: '/' },
  rpc: { output: './src/osconfig/rpc.ts', parseResponse: true },
  swr: { output: './src/osconfig/hooks/swr.ts' },
  'tanstack-query': { output: './src/osconfig/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/osconfig/hooks/preact-query.ts' },
  'solid-query': { output: './src/osconfig/hooks/solid-query.ts' },
  'vue-query': { output: './src/osconfig/hooks/vue-query.ts' },
  'svelte-query': { output: './src/osconfig/hooks/svelte-query.ts' },
  'angular-query': { output: './src/osconfig/hooks/angular-query.ts' },
  docs: {
    output: './src/osconfig/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
