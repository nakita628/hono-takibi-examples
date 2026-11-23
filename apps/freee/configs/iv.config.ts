import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/freee/freee-api-schema/master/iv/open-api-3/api-schema.yml',
  output: './src/iv/routes.ts',
  template: {},
  type: { output: './src/iv/types.ts' },
  client: { output: './src/iv/client.ts', baseUrl: '/' },
  rpc: { output: './src/iv/rpc.ts', parseResponse: true },
  swr: { output: './src/iv/hooks/swr.ts' },
  'tanstack-query': { output: './src/iv/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/iv/hooks/preact-query.ts' },
  'solid-query': { output: './src/iv/hooks/solid-query.ts' },
  'vue-query': { output: './src/iv/hooks/vue-query.ts' },
  'svelte-query': { output: './src/iv/hooks/svelte-query.ts' },
  'angular-query': { output: './src/iv/hooks/angular-query.ts' },
  docs: {
    output: './src/iv/api.md',
    curl: true,
    baseUrl: 'https://api.freee.co.jp/iv',
  },
})
