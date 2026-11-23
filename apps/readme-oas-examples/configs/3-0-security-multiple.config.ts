import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/security-multiple.yaml',
  output: './src/3-0-security-multiple/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-security-multiple/types.ts' },
  client: { output: './src/3-0-security-multiple/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-security-multiple/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-security-multiple/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-security-multiple/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-security-multiple/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-security-multiple/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-security-multiple/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-security-multiple/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-security-multiple/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-security-multiple/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
