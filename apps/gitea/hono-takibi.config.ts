import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Gitea API v1, OpenAPI 3 generated in the official repo:
  // https://github.com/go-gitea/gitea/blob/main/templates/swagger/v1-openapi3.generated.json
  input:
    'https://raw.githubusercontent.com/go-gitea/gitea/main/templates/swagger/v1-openapi3.generated.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://gitea.com/api/v1',
  },
})
