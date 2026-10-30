import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CMS/Cms%20Content%20Audit/Rollouts/144888/2026-09/cmsContentAudit.json',
  output: './src/cms-cms-content-audit/routes.ts',
  docs: {
    output: './src/cms-cms-content-audit/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
