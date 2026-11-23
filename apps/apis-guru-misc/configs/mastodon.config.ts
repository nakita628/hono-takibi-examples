import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mastodon.local/1.0/openapi.yaml',
  output: './src/mastodon/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/mastodon/types.ts' },
  client: { output: './src/mastodon/client.ts', baseUrl: '/' },
  rpc: { output: './src/mastodon/rpc.ts', parseResponse: true },
  swr: { output: './src/mastodon/hooks/swr.ts' },
  'tanstack-query': { output: './src/mastodon/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mastodon/hooks/preact-query.ts' },
  'solid-query': { output: './src/mastodon/hooks/solid-query.ts' },
  'vue-query': { output: './src/mastodon/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mastodon/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mastodon/hooks/angular-query.ts' },
  docs: {
    output: './src/mastodon/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
