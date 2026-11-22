import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/chompthis.com/1.0.0-oas3/openapi.yaml',
  output: './src/chompthis/routes.ts',
  template: {},
  type: { output: './src/chompthis/types.ts' },
  client: { output: './src/chompthis/client.ts', baseUrl: '/' },
  rpc: { output: './src/chompthis/rpc.ts', parseResponse: true },
  swr: { output: './src/chompthis/hooks/swr.ts' },
  'tanstack-query': { output: './src/chompthis/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/chompthis/hooks/preact-query.ts' },
  'solid-query': { output: './src/chompthis/hooks/solid-query.ts' },
  'vue-query': { output: './src/chompthis/hooks/vue-query.ts' },
  'svelte-query': { output: './src/chompthis/hooks/svelte-query.ts' },
  'angular-query': { output: './src/chompthis/hooks/angular-query.ts' },
  docs: {
    output: './src/chompthis/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
