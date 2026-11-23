import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mermade.org.uk/openapi-converter/1.0.0/openapi.yaml',
  output: './src/mermade-org-uk-openapi-converter/routes.ts',
  template: {},
  type: { output: './src/mermade-org-uk-openapi-converter/types.ts' },
  client: { output: './src/mermade-org-uk-openapi-converter/client.ts', baseUrl: '/' },
  rpc: { output: './src/mermade-org-uk-openapi-converter/rpc.ts', parseResponse: true },
  swr: { output: './src/mermade-org-uk-openapi-converter/hooks/swr.ts' },
  'tanstack-query': { output: './src/mermade-org-uk-openapi-converter/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mermade-org-uk-openapi-converter/hooks/preact-query.ts' },
  'solid-query': { output: './src/mermade-org-uk-openapi-converter/hooks/solid-query.ts' },
  'vue-query': { output: './src/mermade-org-uk-openapi-converter/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mermade-org-uk-openapi-converter/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mermade-org-uk-openapi-converter/hooks/angular-query.ts' },
  docs: {
    output: './src/mermade-org-uk-openapi-converter/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
