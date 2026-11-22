import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apple.com/sirikit-cloud-media/1.0.2/openapi.yaml',
  output: './src/apple-sirikit-cloud-media/routes.ts',
  template: {},
  type: { output: './src/apple-sirikit-cloud-media/types.ts' },
  client: { output: './src/apple-sirikit-cloud-media/client.ts', baseUrl: '/' },
  rpc: { output: './src/apple-sirikit-cloud-media/rpc.ts', parseResponse: true },
  swr: { output: './src/apple-sirikit-cloud-media/hooks/swr.ts' },
  'tanstack-query': { output: './src/apple-sirikit-cloud-media/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/apple-sirikit-cloud-media/hooks/preact-query.ts' },
  'solid-query': { output: './src/apple-sirikit-cloud-media/hooks/solid-query.ts' },
  'vue-query': { output: './src/apple-sirikit-cloud-media/hooks/vue-query.ts' },
  'svelte-query': { output: './src/apple-sirikit-cloud-media/hooks/svelte-query.ts' },
  'angular-query': { output: './src/apple-sirikit-cloud-media/hooks/angular-query.ts' },
  docs: {
    output: './src/apple-sirikit-cloud-media/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
