import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/connectparticipant/2018-09-07/openapi.yaml',
  output: './src/connectparticipant/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/connectparticipant/types.ts' },
  client: { output: './src/connectparticipant/client.ts', baseUrl: '/' },
  rpc: { output: './src/connectparticipant/rpc.ts', parseResponse: true },
  swr: { output: './src/connectparticipant/hooks/swr.ts' },
  'tanstack-query': { output: './src/connectparticipant/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/connectparticipant/hooks/preact-query.ts' },
  'solid-query': { output: './src/connectparticipant/hooks/solid-query.ts' },
  'vue-query': { output: './src/connectparticipant/hooks/vue-query.ts' },
  'svelte-query': { output: './src/connectparticipant/hooks/svelte-query.ts' },
  'angular-query': { output: './src/connectparticipant/hooks/angular-query.ts' },
  docs: {
    output: './src/connectparticipant/api.md',
    curl: true,
    baseUrl: 'https://connectparticipant.us-east-1.amazonaws.com',
  },
})
