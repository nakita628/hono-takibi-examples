import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Source%20Code/Rollouts/140886/2026-09/sourceCode.json',
  output: './src/cms-source-code/routes.ts',
  docs: {
    output: './src/cms-source-code/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
