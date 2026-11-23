import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/digitalocean.com/2.0/openapi.yaml',
  output: './src/digitalocean/routes.ts',
  template: {},
  type: { output: './src/digitalocean/types.ts' },
  client: { output: './src/digitalocean/client.ts', baseUrl: '/' },
  rpc: { output: './src/digitalocean/rpc.ts', parseResponse: true },
  swr: { output: './src/digitalocean/hooks/swr.ts' },
  'tanstack-query': { output: './src/digitalocean/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/digitalocean/hooks/preact-query.ts' },
  'solid-query': { output: './src/digitalocean/hooks/solid-query.ts' },
  'vue-query': { output: './src/digitalocean/hooks/vue-query.ts' },
  'svelte-query': { output: './src/digitalocean/hooks/svelte-query.ts' },
  'angular-query': { output: './src/digitalocean/hooks/angular-query.ts' },
  docs: {
    output: './src/digitalocean/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
