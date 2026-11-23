import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/fuzz1/f8c97f2c-efa9-4a93-bd39-e7008df12b47.yaml',
  output: './src/3-0-fuzz1-f8c97f2c-efa9-4a93-bd39-e7008df12b47/routes.ts',
  template: {},
  type: { output: './src/3-0-fuzz1-f8c97f2c-efa9-4a93-bd39-e7008df12b47/types.ts' },
  client: { output: './src/3-0-fuzz1-f8c97f2c-efa9-4a93-bd39-e7008df12b47/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-fuzz1-f8c97f2c-efa9-4a93-bd39-e7008df12b47/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-fuzz1-f8c97f2c-efa9-4a93-bd39-e7008df12b47/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-fuzz1-f8c97f2c-efa9-4a93-bd39-e7008df12b47/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-fuzz1-f8c97f2c-efa9-4a93-bd39-e7008df12b47/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-fuzz1-f8c97f2c-efa9-4a93-bd39-e7008df12b47/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-fuzz1-f8c97f2c-efa9-4a93-bd39-e7008df12b47/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-fuzz1-f8c97f2c-efa9-4a93-bd39-e7008df12b47/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-fuzz1-f8c97f2c-efa9-4a93-bd39-e7008df12b47/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-fuzz1-f8c97f2c-efa9-4a93-bd39-e7008df12b47/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
