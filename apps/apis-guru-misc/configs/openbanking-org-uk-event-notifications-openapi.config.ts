import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openbanking.org.uk/event-notifications-openapi/3.1.7/openapi.yaml',
  output: './src/openbanking-org-uk-event-notifications-openapi/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/openbanking-org-uk-event-notifications-openapi/types.ts' },
  client: { output: './src/openbanking-org-uk-event-notifications-openapi/client.ts', baseUrl: '/' },
  rpc: { output: './src/openbanking-org-uk-event-notifications-openapi/rpc.ts', parseResponse: true },
  swr: { output: './src/openbanking-org-uk-event-notifications-openapi/hooks/swr.ts' },
  'tanstack-query': { output: './src/openbanking-org-uk-event-notifications-openapi/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/openbanking-org-uk-event-notifications-openapi/hooks/preact-query.ts' },
  'solid-query': { output: './src/openbanking-org-uk-event-notifications-openapi/hooks/solid-query.ts' },
  'vue-query': { output: './src/openbanking-org-uk-event-notifications-openapi/hooks/vue-query.ts' },
  'svelte-query': { output: './src/openbanking-org-uk-event-notifications-openapi/hooks/svelte-query.ts' },
  'angular-query': { output: './src/openbanking-org-uk-event-notifications-openapi/hooks/angular-query.ts' },
  docs: {
    output: './src/openbanking-org-uk-event-notifications-openapi/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
