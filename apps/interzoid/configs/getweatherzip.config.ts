import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getweatherzip/1.0.0/openapi.yaml',
  output: './src/getweatherzip/routes.ts',
  template: {},
  type: { output: './src/getweatherzip/types.ts' },
  client: { output: './src/getweatherzip/client.ts', baseUrl: '/' },
  rpc: { output: './src/getweatherzip/rpc.ts', parseResponse: true },
  swr: { output: './src/getweatherzip/hooks/swr.ts' },
  'tanstack-query': { output: './src/getweatherzip/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/getweatherzip/hooks/preact-query.ts' },
  'solid-query': { output: './src/getweatherzip/hooks/solid-query.ts' },
  'vue-query': { output: './src/getweatherzip/hooks/vue-query.ts' },
  'svelte-query': { output: './src/getweatherzip/hooks/svelte-query.ts' },
  'angular-query': { output: './src/getweatherzip/hooks/angular-query.ts' },
  docs: {
    output: './src/getweatherzip/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
