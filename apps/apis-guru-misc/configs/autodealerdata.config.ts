import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/autodealerdata.com/1.0/openapi.yaml',
  output: './src/autodealerdata/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/autodealerdata/types.ts' },
  client: { output: './src/autodealerdata/client.ts', baseUrl: '/' },
  rpc: { output: './src/autodealerdata/rpc.ts', parseResponse: true },
  swr: { output: './src/autodealerdata/hooks/swr.ts' },
  'tanstack-query': { output: './src/autodealerdata/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/autodealerdata/hooks/preact-query.ts' },
  'solid-query': { output: './src/autodealerdata/hooks/solid-query.ts' },
  'vue-query': { output: './src/autodealerdata/hooks/vue-query.ts' },
  'svelte-query': { output: './src/autodealerdata/hooks/svelte-query.ts' },
  'angular-query': { output: './src/autodealerdata/hooks/angular-query.ts' },
  docs: {
    output: './src/autodealerdata/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
