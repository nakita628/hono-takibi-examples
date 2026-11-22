import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/fuzz1/71d901df-4c4c-40da-bb0a-41aa6f3b5533.yaml',
  output: './src/3-0-fuzz1-71d901df-4c4c-40da-bb0a-41aa6f3b5533/routes.ts',
  template: {},
  type: { output: './src/3-0-fuzz1-71d901df-4c4c-40da-bb0a-41aa6f3b5533/types.ts' },
  client: { output: './src/3-0-fuzz1-71d901df-4c4c-40da-bb0a-41aa6f3b5533/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-fuzz1-71d901df-4c4c-40da-bb0a-41aa6f3b5533/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-fuzz1-71d901df-4c4c-40da-bb0a-41aa6f3b5533/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-fuzz1-71d901df-4c4c-40da-bb0a-41aa6f3b5533/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-fuzz1-71d901df-4c4c-40da-bb0a-41aa6f3b5533/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-fuzz1-71d901df-4c4c-40da-bb0a-41aa6f3b5533/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-fuzz1-71d901df-4c4c-40da-bb0a-41aa6f3b5533/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-fuzz1-71d901df-4c4c-40da-bb0a-41aa6f3b5533/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-fuzz1-71d901df-4c4c-40da-bb0a-41aa6f3b5533/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-fuzz1-71d901df-4c4c-40da-bb0a-41aa6f3b5533/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
