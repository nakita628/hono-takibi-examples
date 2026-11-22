import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/telematicssdk.com/1.0.0/openapi.yaml',
  output: './src/telematicssdk/routes.ts',
  // template: { routeHandler: true }: the default template exports each handler file under its tag or first
  // path segment, and one here starts with a digit, which is not an identifier (nakita628/hono-takibi#506).
  template: { routeHandler: true },
  type: { output: './src/telematicssdk/types.ts' },
  client: { output: './src/telematicssdk/client.ts', baseUrl: '/' },
  rpc: { output: './src/telematicssdk/rpc.ts', parseResponse: true },
  swr: { output: './src/telematicssdk/hooks/swr.ts' },
  'tanstack-query': { output: './src/telematicssdk/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/telematicssdk/hooks/preact-query.ts' },
  'solid-query': { output: './src/telematicssdk/hooks/solid-query.ts' },
  'vue-query': { output: './src/telematicssdk/hooks/vue-query.ts' },
  'svelte-query': { output: './src/telematicssdk/hooks/svelte-query.ts' },
  'angular-query': { output: './src/telematicssdk/hooks/angular-query.ts' },
  docs: {
    output: './src/telematicssdk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
