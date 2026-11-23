import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apache.org/airflow/2.5.1/openapi.yaml',
  output: './src/apache-org-airflow/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/apache-org-airflow/types.ts' },
  client: { output: './src/apache-org-airflow/client.ts', baseUrl: '/' },
  rpc: { output: './src/apache-org-airflow/rpc.ts', parseResponse: true },
  swr: { output: './src/apache-org-airflow/hooks/swr.ts' },
  'tanstack-query': { output: './src/apache-org-airflow/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/apache-org-airflow/hooks/preact-query.ts' },
  'solid-query': { output: './src/apache-org-airflow/hooks/solid-query.ts' },
  'vue-query': { output: './src/apache-org-airflow/hooks/vue-query.ts' },
  'svelte-query': { output: './src/apache-org-airflow/hooks/svelte-query.ts' },
  'angular-query': { output: './src/apache-org-airflow/hooks/angular-query.ts' },
  docs: {
    output: './src/apache-org-airflow/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
