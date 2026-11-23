import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apispot.io/whois/1.0/openapi.yaml',
  output: './src/apispot-io-whois/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/apispot-io-whois/types.ts' },
  client: { output: './src/apispot-io-whois/client.ts', baseUrl: '/' },
  rpc: { output: './src/apispot-io-whois/rpc.ts', parseResponse: true },
  swr: { output: './src/apispot-io-whois/hooks/swr.ts' },
  'tanstack-query': { output: './src/apispot-io-whois/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/apispot-io-whois/hooks/preact-query.ts' },
  'solid-query': { output: './src/apispot-io-whois/hooks/solid-query.ts' },
  'vue-query': { output: './src/apispot-io-whois/hooks/vue-query.ts' },
  'svelte-query': { output: './src/apispot-io-whois/hooks/svelte-query.ts' },
  'angular-query': { output: './src/apispot-io-whois/hooks/angular-query.ts' },
  docs: {
    output: './src/apispot-io-whois/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
