import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.1/yaml/security.yaml',
  output: './src/3-1-security/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-1-security/types.ts' },
  client: { output: './src/3-1-security/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-1-security/rpc.ts', parseResponse: true },
  swr: { output: './src/3-1-security/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-1-security/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-1-security/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-1-security/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-1-security/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-1-security/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-1-security/hooks/angular-query.ts' },
  docs: {
    output: './src/3-1-security/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
