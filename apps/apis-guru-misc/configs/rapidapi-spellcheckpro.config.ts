import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/rapidapi.com/spellcheckpro/1.0.0/openapi.yaml',
  output: './src/rapidapi-spellcheckpro/routes.ts',
  template: {},
  type: { output: './src/rapidapi-spellcheckpro/types.ts' },
  client: { output: './src/rapidapi-spellcheckpro/client.ts', baseUrl: '/' },
  rpc: { output: './src/rapidapi-spellcheckpro/rpc.ts', parseResponse: true },
  swr: { output: './src/rapidapi-spellcheckpro/hooks/swr.ts' },
  'tanstack-query': { output: './src/rapidapi-spellcheckpro/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/rapidapi-spellcheckpro/hooks/preact-query.ts' },
  'solid-query': { output: './src/rapidapi-spellcheckpro/hooks/solid-query.ts' },
  'vue-query': { output: './src/rapidapi-spellcheckpro/hooks/vue-query.ts' },
  'svelte-query': { output: './src/rapidapi-spellcheckpro/hooks/svelte-query.ts' },
  'angular-query': { output: './src/rapidapi-spellcheckpro/hooks/angular-query.ts' },
  docs: {
    output: './src/rapidapi-spellcheckpro/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
