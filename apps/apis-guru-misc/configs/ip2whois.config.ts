import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ip2whois.com/1.0/openapi.yaml',
  output: './src/ip2whois/routes.ts',
  template: {},
  type: { output: './src/ip2whois/types.ts' },
  client: { output: './src/ip2whois/client.ts', baseUrl: '/' },
  rpc: { output: './src/ip2whois/rpc.ts', parseResponse: true },
  swr: { output: './src/ip2whois/hooks/swr.ts' },
  'tanstack-query': { output: './src/ip2whois/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ip2whois/hooks/preact-query.ts' },
  'solid-query': { output: './src/ip2whois/hooks/solid-query.ts' },
  'vue-query': { output: './src/ip2whois/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ip2whois/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ip2whois/hooks/angular-query.ts' },
  docs: {
    output: './src/ip2whois/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
