import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.1/yaml/readme-extensions.yaml',
  output: './src/3-1-readme-extensions/routes.ts',
  template: {},
  type: { output: './src/3-1-readme-extensions/types.ts' },
  client: { output: './src/3-1-readme-extensions/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-1-readme-extensions/rpc.ts', parseResponse: true },
  swr: { output: './src/3-1-readme-extensions/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-1-readme-extensions/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-1-readme-extensions/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-1-readme-extensions/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-1-readme-extensions/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-1-readme-extensions/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-1-readme-extensions/hooks/angular-query.ts' },
  docs: {
    output: './src/3-1-readme-extensions/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
