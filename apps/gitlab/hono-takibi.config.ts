import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // GitLab REST API: https://docs.gitlab.com/api/openapi/
  input: 'https://gitlab.com/gitlab-org/gitlab/-/raw/master/doc/api/openapi/openapi_v3.yaml',
  output: './src/routes.ts',
  template: {},
  // No type output and no hooks: the NuGet path Packages(Id='{package_name}',…) contains ', which the type
  // output and the hooks' query keys do not escape, and the run aborts (nakita628/hono-takibi#505).
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://gitlab.com/api/v4',
  },
})
