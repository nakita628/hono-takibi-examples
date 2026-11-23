import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mozilla.com/kinto/1.22/openapi.yaml',
  output: './src/mozilla-kinto/routes.ts',
  template: {},
  type: { output: './src/mozilla-kinto/types.ts' },
  client: { output: './src/mozilla-kinto/client.ts', baseUrl: '/' },
  rpc: { output: './src/mozilla-kinto/rpc.ts', parseResponse: true },
  swr: { output: './src/mozilla-kinto/hooks/swr.ts' },
  'tanstack-query': { output: './src/mozilla-kinto/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mozilla-kinto/hooks/preact-query.ts' },
  'solid-query': { output: './src/mozilla-kinto/hooks/solid-query.ts' },
  'vue-query': { output: './src/mozilla-kinto/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mozilla-kinto/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mozilla-kinto/hooks/angular-query.ts' },
  docs: {
    output: './src/mozilla-kinto/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
