import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/deprecated.yaml',
  output: './src/3-0-deprecated/routes.ts',
  template: {},
  type: { output: './src/3-0-deprecated/types.ts' },
  client: { output: './src/3-0-deprecated/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-deprecated/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-deprecated/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-deprecated/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-deprecated/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-deprecated/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-deprecated/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-deprecated/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-deprecated/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-deprecated/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
