import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/nic.at/domainfinder/1.1.0/openapi.yaml',
  output: './src/nic-at-domainfinder/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/nic-at-domainfinder/types.ts' },
  client: { output: './src/nic-at-domainfinder/client.ts', baseUrl: '/' },
  rpc: { output: './src/nic-at-domainfinder/rpc.ts', parseResponse: true },
  swr: { output: './src/nic-at-domainfinder/hooks/swr.ts' },
  'tanstack-query': { output: './src/nic-at-domainfinder/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/nic-at-domainfinder/hooks/preact-query.ts' },
  'solid-query': { output: './src/nic-at-domainfinder/hooks/solid-query.ts' },
  'vue-query': { output: './src/nic-at-domainfinder/hooks/vue-query.ts' },
  'svelte-query': { output: './src/nic-at-domainfinder/hooks/svelte-query.ts' },
  'angular-query': { output: './src/nic-at-domainfinder/hooks/angular-query.ts' },
  docs: {
    output: './src/nic-at-domainfinder/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
