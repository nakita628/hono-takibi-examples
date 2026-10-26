import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // GitLab REST API: https://docs.gitlab.com/api/openapi/
  input: 'https://gitlab.com/gitlab-org/gitlab/-/raw/master/doc/api/openapi/openapi_v3.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://gitlab.com/api/v4',
  },
})
