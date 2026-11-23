import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/composer/v1beta1/openapi.yaml',
  output: './src/composer/routes.ts',
  template: {},
  type: { output: './src/composer/types.ts' },
  client: { output: './src/composer/client.ts', baseUrl: '/' },
  rpc: { output: './src/composer/rpc.ts', parseResponse: true },
  swr: { output: './src/composer/hooks/swr.ts' },
  'tanstack-query': { output: './src/composer/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/composer/hooks/preact-query.ts' },
  'solid-query': { output: './src/composer/hooks/solid-query.ts' },
  'vue-query': { output: './src/composer/hooks/vue-query.ts' },
  'svelte-query': { output: './src/composer/hooks/svelte-query.ts' },
  'angular-query': { output: './src/composer/hooks/angular-query.ts' },
  docs: {
    output: './src/composer/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
