import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/server_enum_unknown.yaml',
  output: './src/3-0-server-enum-unknown/routes.ts',
  template: {},
  type: { output: './src/3-0-server-enum-unknown/types.ts' },
  client: { output: './src/3-0-server-enum-unknown/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-server-enum-unknown/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-server-enum-unknown/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-server-enum-unknown/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-server-enum-unknown/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-server-enum-unknown/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-server-enum-unknown/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-server-enum-unknown/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-server-enum-unknown/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-server-enum-unknown/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
