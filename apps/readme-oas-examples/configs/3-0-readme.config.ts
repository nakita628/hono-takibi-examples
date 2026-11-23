import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/readme.yaml',
  output: './src/3-0-readme/routes.ts',
  template: {},
  type: { output: './src/3-0-readme/types.ts' },
  client: { output: './src/3-0-readme/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-readme/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-readme/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-readme/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-readme/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-readme/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-readme/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-readme/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-readme/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-readme/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
