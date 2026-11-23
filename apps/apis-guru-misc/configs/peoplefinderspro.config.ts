import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/peoplefinderspro.com/1.0.0/openapi.yaml',
  output: './src/peoplefinderspro/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/peoplefinderspro/types.ts' },
  client: { output: './src/peoplefinderspro/client.ts', baseUrl: '/' },
  rpc: { output: './src/peoplefinderspro/rpc.ts', parseResponse: true },
  swr: { output: './src/peoplefinderspro/hooks/swr.ts' },
  'tanstack-query': { output: './src/peoplefinderspro/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/peoplefinderspro/hooks/preact-query.ts' },
  'solid-query': { output: './src/peoplefinderspro/hooks/solid-query.ts' },
  'vue-query': { output: './src/peoplefinderspro/hooks/vue-query.ts' },
  'svelte-query': { output: './src/peoplefinderspro/hooks/svelte-query.ts' },
  'angular-query': { output: './src/peoplefinderspro/hooks/angular-query.ts' },
  docs: {
    output: './src/peoplefinderspro/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
