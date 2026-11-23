import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/sms-voice/2018-09-05/openapi.yaml',
  output: './src/sms-voice/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sms-voice/types.ts' },
  client: { output: './src/sms-voice/client.ts', baseUrl: '/' },
  rpc: { output: './src/sms-voice/rpc.ts', parseResponse: true },
  swr: { output: './src/sms-voice/hooks/swr.ts' },
  'tanstack-query': { output: './src/sms-voice/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sms-voice/hooks/preact-query.ts' },
  'solid-query': { output: './src/sms-voice/hooks/solid-query.ts' },
  'vue-query': { output: './src/sms-voice/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sms-voice/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sms-voice/hooks/angular-query.ts' },
  docs: {
    output: './src/sms-voice/api.md',
    curl: true,
    baseUrl: 'https://sms-voice.us-east-1.amazonaws.com',
  },
})
