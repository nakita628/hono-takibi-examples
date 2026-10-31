import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/etsi.local/MEC010-2_AppPkgMgmt/2.1.1/openapi.yaml',
  output: './src/etsi-mec010-2-apppkgmgmt/routes.ts',
  docs: {
    output: './src/etsi-mec010-2-apppkgmgmt/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
