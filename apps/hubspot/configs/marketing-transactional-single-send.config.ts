import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Marketing/Transactional%20Single%20Send/Rollouts/140892/2026-09/transactionalSingleSend.json',
  output: './src/marketing-transactional-single-send/routes.ts',
  docs: {
    output: './src/marketing-transactional-single-send/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
