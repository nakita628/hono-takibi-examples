import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/server_enum_empty.yaml',
  output: './src/3-0-server-enum-empty/routes.ts',
  template: {},
  type: { output: './src/3-0-server-enum-empty/types.ts' },
  client: { output: './src/3-0-server-enum-empty/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-server-enum-empty/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-server-enum-empty/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-server-enum-empty/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-server-enum-empty/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-server-enum-empty/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-server-enum-empty/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-server-enum-empty/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-server-enum-empty/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-server-enum-empty/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
