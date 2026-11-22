import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Train Travel API from ReadMe's OpenAPI examples, used to show the client-side outputs:
  // https://github.com/readmeio/oas-examples/blob/060d4ffbbe63003f923c8cd7268ee39a495cf21f/3.1/json/train-travel.json
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.1/json/train-travel.json',
  output: './src/routes.ts',
  // The client is typed by the app the template scaffolds (src/index.ts), so rpc and the hooks need it.
  // The handler stubs in src/handlers are filled with `throw new Error('Not implemented')` so the app
  // typechecks (nakita628/hono-takibi#497); hono-takibi keeps handler bodies when it regenerates.
  template: {},
  // Types of the whole API. The client cannot be typed from this file yet: `client.import: './types'`
  // imports `{ api }`, which types.ts does not export (nakita628/hono-takibi#498).
  type: { output: './src/types.ts' },
  client: { output: './src/client.ts', baseUrl: '/' },
  // RPC functions that wrap each call in parseResponse(); configs/response.config.ts writes the variant without it.
  rpc: { output: './src/rpc/parse-response.ts', parseResponse: true },
  swr: { output: './src/hooks/swr.ts' },
  'tanstack-query': { output: './src/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hooks/preact-query.ts' },
  'solid-query': { output: './src/hooks/solid-query.ts' },
  'vue-query': { output: './src/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hooks/angular-query.ts' },
})
