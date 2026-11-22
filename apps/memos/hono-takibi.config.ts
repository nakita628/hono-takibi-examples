import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Memos API, official OpenAPI spec:
  // https://github.com/usememos/memos/blob/1825ae440fdfd7201ce0ff96a4414933402311ef/proto/gen/openapi.yaml
  input: 'https://raw.githubusercontent.com/usememos/memos/main/proto/gen/openapi.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'http://localhost:5230',
  },
})
