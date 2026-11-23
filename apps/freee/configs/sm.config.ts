import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/freee/freee-api-schema/master/sm/open-api-3/api-schema.yml',
  output: './src/sm/routes.ts',
  template: {},
  type: { output: './src/sm/types.ts' },
  client: { output: './src/sm/client.ts', baseUrl: '/' },
  rpc: { output: './src/sm/rpc.ts', parseResponse: true },
  swr: { output: './src/sm/hooks/swr.ts' },
  'tanstack-query': { output: './src/sm/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sm/hooks/preact-query.ts' },
  'solid-query': { output: './src/sm/hooks/solid-query.ts' },
  'vue-query': { output: './src/sm/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sm/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sm/hooks/angular-query.ts' },
  docs: {
    output: './src/sm/api.md',
    curl: true,
    baseUrl: 'https://api.freee.co.jp/sm',
  },
})
