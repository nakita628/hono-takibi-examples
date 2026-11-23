import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/rapidapi.com/idealspot-geodata/1.0/openapi.yaml',
  output: './src/rapidapi-idealspot-geodata/routes.ts',
  template: {},
  type: { output: './src/rapidapi-idealspot-geodata/types.ts' },
  client: { output: './src/rapidapi-idealspot-geodata/client.ts', baseUrl: '/' },
  rpc: { output: './src/rapidapi-idealspot-geodata/rpc.ts', parseResponse: true },
  swr: { output: './src/rapidapi-idealspot-geodata/hooks/swr.ts' },
  'tanstack-query': { output: './src/rapidapi-idealspot-geodata/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/rapidapi-idealspot-geodata/hooks/preact-query.ts' },
  'solid-query': { output: './src/rapidapi-idealspot-geodata/hooks/solid-query.ts' },
  'vue-query': { output: './src/rapidapi-idealspot-geodata/hooks/vue-query.ts' },
  'svelte-query': { output: './src/rapidapi-idealspot-geodata/hooks/svelte-query.ts' },
  'angular-query': { output: './src/rapidapi-idealspot-geodata/hooks/angular-query.ts' },
  docs: {
    output: './src/rapidapi-idealspot-geodata/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
