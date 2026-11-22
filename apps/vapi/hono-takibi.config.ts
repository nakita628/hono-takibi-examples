import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Not generated with hono-takibi 0.32.7: the sibling oneOf next to allOf on 24 properties is written into
  // .openapi() with every $ref inlined, and the run dies with RangeError: Invalid string length
  // (nakita628/hono-takibi#510). 0.32.6 generated it.
  input: 'https://api.vapi.ai/api-json',
  output: './src/routes.ts',
  template: {},
  type: { output: './src/types.ts' },
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
  swr: { output: './src/hooks/swr.ts' },
  'tanstack-query': { output: './src/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hooks/preact-query.ts' },
  'solid-query': { output: './src/hooks/solid-query.ts' },
  'vue-query': { output: './src/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hooks/angular-query.ts' },
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.vapi.ai',
  },
})
