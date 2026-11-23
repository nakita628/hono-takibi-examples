import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/recaptchaenterprise/v1/openapi.yaml',
  output: './src/recaptchaenterprise/routes.ts',
  template: {},
  type: { output: './src/recaptchaenterprise/types.ts' },
  client: { output: './src/recaptchaenterprise/client.ts', baseUrl: '/' },
  rpc: { output: './src/recaptchaenterprise/rpc.ts', parseResponse: true },
  swr: { output: './src/recaptchaenterprise/hooks/swr.ts' },
  'tanstack-query': { output: './src/recaptchaenterprise/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/recaptchaenterprise/hooks/preact-query.ts' },
  'solid-query': { output: './src/recaptchaenterprise/hooks/solid-query.ts' },
  'vue-query': { output: './src/recaptchaenterprise/hooks/vue-query.ts' },
  'svelte-query': { output: './src/recaptchaenterprise/hooks/svelte-query.ts' },
  'angular-query': { output: './src/recaptchaenterprise/hooks/angular-query.ts' },
  docs: {
    output: './src/recaptchaenterprise/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
