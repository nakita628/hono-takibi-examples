import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.1/pass/minimal_paths.yaml',
  output: './src/3-1-minimal-paths/routes.ts',
  template: {},
  type: { output: './src/3-1-minimal-paths/types.ts' },
  client: { output: './src/3-1-minimal-paths/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-1-minimal-paths/rpc.ts', parseResponse: true },
  swr: { output: './src/3-1-minimal-paths/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-1-minimal-paths/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-1-minimal-paths/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-1-minimal-paths/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-1-minimal-paths/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-1-minimal-paths/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-1-minimal-paths/hooks/angular-query.ts' },
  docs: {
    output: './src/3-1-minimal-paths/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
