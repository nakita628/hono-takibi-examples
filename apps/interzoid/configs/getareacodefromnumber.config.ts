import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getareacodefromnumber/1.0.0/openapi.yaml',
  output: './src/getareacodefromnumber/routes.ts',
  template: {},
  type: { output: './src/getareacodefromnumber/types.ts' },
  client: { output: './src/getareacodefromnumber/client.ts', baseUrl: '/' },
  rpc: { output: './src/getareacodefromnumber/rpc.ts', parseResponse: true },
  swr: { output: './src/getareacodefromnumber/hooks/swr.ts' },
  'tanstack-query': { output: './src/getareacodefromnumber/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/getareacodefromnumber/hooks/preact-query.ts' },
  'solid-query': { output: './src/getareacodefromnumber/hooks/solid-query.ts' },
  'vue-query': { output: './src/getareacodefromnumber/hooks/vue-query.ts' },
  'svelte-query': { output: './src/getareacodefromnumber/hooks/svelte-query.ts' },
  'angular-query': { output: './src/getareacodefromnumber/hooks/angular-query.ts' },
  docs: {
    output: './src/getareacodefromnumber/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
