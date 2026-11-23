import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/playdeveloperreporting/v1beta1/openapi.yaml',
  output: './src/playdeveloperreporting/routes.ts',
  template: {},
  type: { output: './src/playdeveloperreporting/types.ts' },
  client: { output: './src/playdeveloperreporting/client.ts', baseUrl: '/' },
  rpc: { output: './src/playdeveloperreporting/rpc.ts', parseResponse: true },
  swr: { output: './src/playdeveloperreporting/hooks/swr.ts' },
  'tanstack-query': { output: './src/playdeveloperreporting/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/playdeveloperreporting/hooks/preact-query.ts' },
  'solid-query': { output: './src/playdeveloperreporting/hooks/solid-query.ts' },
  'vue-query': { output: './src/playdeveloperreporting/hooks/vue-query.ts' },
  'svelte-query': { output: './src/playdeveloperreporting/hooks/svelte-query.ts' },
  'angular-query': { output: './src/playdeveloperreporting/hooks/angular-query.ts' },
  docs: {
    output: './src/playdeveloperreporting/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
