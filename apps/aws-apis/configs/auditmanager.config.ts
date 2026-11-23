import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/auditmanager/2017-07-25/openapi.yaml',
  output: './src/auditmanager/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/auditmanager/types.ts' },
  client: { output: './src/auditmanager/client.ts', baseUrl: '/' },
  rpc: { output: './src/auditmanager/rpc.ts', parseResponse: true },
  swr: { output: './src/auditmanager/hooks/swr.ts' },
  'tanstack-query': { output: './src/auditmanager/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/auditmanager/hooks/preact-query.ts' },
  'solid-query': { output: './src/auditmanager/hooks/solid-query.ts' },
  'vue-query': { output: './src/auditmanager/hooks/vue-query.ts' },
  'svelte-query': { output: './src/auditmanager/hooks/svelte-query.ts' },
  'angular-query': { output: './src/auditmanager/hooks/angular-query.ts' },
  docs: {
    output: './src/auditmanager/api.md',
    curl: true,
    baseUrl: 'https://auditmanager.us-east-1.amazonaws.com',
  },
})
