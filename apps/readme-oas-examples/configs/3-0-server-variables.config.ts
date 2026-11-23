import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/server-variables.yaml',
  output: './src/3-0-server-variables/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-server-variables/types.ts' },
  client: { output: './src/3-0-server-variables/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-server-variables/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-server-variables/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-server-variables/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-server-variables/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-server-variables/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-server-variables/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-server-variables/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-server-variables/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-server-variables/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
