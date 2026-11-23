import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/libretranslate.local/1.3.9/openapi.yaml',
  output: './src/libretranslate/routes.ts',
  template: {},
  type: { output: './src/libretranslate/types.ts' },
  client: { output: './src/libretranslate/client.ts', baseUrl: '/' },
  rpc: { output: './src/libretranslate/rpc.ts', parseResponse: true },
  swr: { output: './src/libretranslate/hooks/swr.ts' },
  'tanstack-query': { output: './src/libretranslate/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/libretranslate/hooks/preact-query.ts' },
  'solid-query': { output: './src/libretranslate/hooks/solid-query.ts' },
  'vue-query': { output: './src/libretranslate/hooks/vue-query.ts' },
  'svelte-query': { output: './src/libretranslate/hooks/svelte-query.ts' },
  'angular-query': { output: './src/libretranslate/hooks/angular-query.ts' },
  docs: {
    output: './src/libretranslate/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
