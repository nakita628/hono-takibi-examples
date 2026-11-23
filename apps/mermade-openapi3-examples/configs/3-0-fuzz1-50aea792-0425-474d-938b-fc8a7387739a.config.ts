import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/fuzz1/50aea792-0425-474d-938b-fc8a7387739a.yaml',
  output: './src/3-0-fuzz1-50aea792-0425-474d-938b-fc8a7387739a/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-fuzz1-50aea792-0425-474d-938b-fc8a7387739a/types.ts' },
  client: { output: './src/3-0-fuzz1-50aea792-0425-474d-938b-fc8a7387739a/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-fuzz1-50aea792-0425-474d-938b-fc8a7387739a/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-fuzz1-50aea792-0425-474d-938b-fc8a7387739a/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-fuzz1-50aea792-0425-474d-938b-fc8a7387739a/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-fuzz1-50aea792-0425-474d-938b-fc8a7387739a/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-fuzz1-50aea792-0425-474d-938b-fc8a7387739a/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-fuzz1-50aea792-0425-474d-938b-fc8a7387739a/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-fuzz1-50aea792-0425-474d-938b-fc8a7387739a/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-fuzz1-50aea792-0425-474d-938b-fc8a7387739a/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-fuzz1-50aea792-0425-474d-938b-fc8a7387739a/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
