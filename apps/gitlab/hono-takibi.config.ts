import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // GitLab REST API: https://docs.gitlab.com/api/openapi/
  input: 'https://gitlab.com/gitlab-org/gitlab/-/raw/master/doc/api/openapi/openapi_v3.yaml',
  output: './src/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/types.ts' },
  // No hooks: the hooks' query keys write paths that contain ' (OData function calls) without escaping,
  // and the run aborts (nakita628/hono-takibi#541).
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://gitlab.com/api/v4',
  },
})
