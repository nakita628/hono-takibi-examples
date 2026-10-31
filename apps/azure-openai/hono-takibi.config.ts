import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/microsoft/AzureOpenAI-with-APIM/main/api_definitions/AzureOpenAI_OpenAPI.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://example.openai.azure.com/openai',
  },
})
