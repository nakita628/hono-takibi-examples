import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/impala.travel/hotels/1.003/openapi.yaml',
  output: './src/impala-travel-hotels/routes.ts',
  template: {},
  type: { output: './src/impala-travel-hotels/types.ts' },
  client: { output: './src/impala-travel-hotels/client.ts', baseUrl: '/' },
  rpc: { output: './src/impala-travel-hotels/rpc.ts', parseResponse: true },
  swr: { output: './src/impala-travel-hotels/hooks/swr.ts' },
  'tanstack-query': { output: './src/impala-travel-hotels/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/impala-travel-hotels/hooks/preact-query.ts' },
  'solid-query': { output: './src/impala-travel-hotels/hooks/solid-query.ts' },
  'vue-query': { output: './src/impala-travel-hotels/hooks/vue-query.ts' },
  'svelte-query': { output: './src/impala-travel-hotels/hooks/svelte-query.ts' },
  'angular-query': { output: './src/impala-travel-hotels/hooks/angular-query.ts' },
  docs: {
    output: './src/impala-travel-hotels/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
