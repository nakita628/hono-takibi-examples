import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.1/pass/minimal_hooks.yaml',
  output: './src/3-1-minimal-hooks/routes.ts',
  template: {},
  type: { output: './src/3-1-minimal-hooks/types.ts' },
  client: { output: './src/3-1-minimal-hooks/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-1-minimal-hooks/rpc.ts', parseResponse: true },
  swr: { output: './src/3-1-minimal-hooks/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-1-minimal-hooks/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-1-minimal-hooks/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-1-minimal-hooks/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-1-minimal-hooks/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-1-minimal-hooks/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-1-minimal-hooks/hooks/angular-query.ts' },
  docs: {
    output: './src/3-1-minimal-hooks/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
