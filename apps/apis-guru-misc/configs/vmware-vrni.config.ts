import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vmware.local/vrni/1.0.0/openapi.yaml',
  output: './src/vmware-vrni/routes.ts',
  docs: {
    output: './src/vmware-vrni/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
