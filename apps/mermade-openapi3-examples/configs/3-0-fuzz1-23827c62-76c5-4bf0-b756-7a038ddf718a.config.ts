import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/fuzz1/23827c62-76c5-4bf0-b756-7a038ddf718a.yaml',
  output: './src/3-0-fuzz1-23827c62-76c5-4bf0-b756-7a038ddf718a/routes.ts',
  template: {},
  type: { output: './src/3-0-fuzz1-23827c62-76c5-4bf0-b756-7a038ddf718a/types.ts' },
  client: { output: './src/3-0-fuzz1-23827c62-76c5-4bf0-b756-7a038ddf718a/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-fuzz1-23827c62-76c5-4bf0-b756-7a038ddf718a/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-fuzz1-23827c62-76c5-4bf0-b756-7a038ddf718a/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-fuzz1-23827c62-76c5-4bf0-b756-7a038ddf718a/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-fuzz1-23827c62-76c5-4bf0-b756-7a038ddf718a/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-fuzz1-23827c62-76c5-4bf0-b756-7a038ddf718a/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-fuzz1-23827c62-76c5-4bf0-b756-7a038ddf718a/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-fuzz1-23827c62-76c5-4bf0-b756-7a038ddf718a/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-fuzz1-23827c62-76c5-4bf0-b756-7a038ddf718a/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-fuzz1-23827c62-76c5-4bf0-b756-7a038ddf718a/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
