import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/extensionsEverywhere.yaml',
  output: './src/3-0-extensionseverywhere/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-extensionseverywhere/types.ts' },
  client: { output: './src/3-0-extensionseverywhere/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-extensionseverywhere/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-extensionseverywhere/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-extensionseverywhere/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-extensionseverywhere/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-extensionseverywhere/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-extensionseverywhere/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-extensionseverywhere/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-extensionseverywhere/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-extensionseverywhere/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
