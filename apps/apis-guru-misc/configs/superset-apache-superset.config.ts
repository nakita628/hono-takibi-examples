import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/superset.apache.local/superset/v1/openapi.yaml',
  output: './src/superset-apache-superset/routes.ts',
  template: {},
  type: { output: './src/superset-apache-superset/types.ts' },
  client: { output: './src/superset-apache-superset/client.ts', baseUrl: '/' },
  rpc: { output: './src/superset-apache-superset/rpc.ts', parseResponse: true },
  swr: { output: './src/superset-apache-superset/hooks/swr.ts' },
  'tanstack-query': { output: './src/superset-apache-superset/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/superset-apache-superset/hooks/preact-query.ts' },
  'solid-query': { output: './src/superset-apache-superset/hooks/solid-query.ts' },
  'vue-query': { output: './src/superset-apache-superset/hooks/vue-query.ts' },
  'svelte-query': { output: './src/superset-apache-superset/hooks/svelte-query.ts' },
  'angular-query': { output: './src/superset-apache-superset/hooks/angular-query.ts' },
  docs: {
    output: './src/superset-apache-superset/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
