import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/freee/freee-api-schema/master/hr/open-api-3/api-schema.json',
  output: './src/hr/routes.ts',
  template: {},
  type: { output: './src/hr/types.ts' },
  client: { output: './src/hr/client.ts', baseUrl: '/' },
  rpc: { output: './src/hr/rpc.ts', parseResponse: true },
  swr: { output: './src/hr/hooks/swr.ts' },
  'tanstack-query': { output: './src/hr/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hr/hooks/preact-query.ts' },
  'solid-query': { output: './src/hr/hooks/solid-query.ts' },
  'vue-query': { output: './src/hr/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hr/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hr/hooks/angular-query.ts' },
  docs: {
    output: './src/hr/api.md',
    curl: true,
    baseUrl: 'https://api.freee.co.jp/hr',
  },
})
