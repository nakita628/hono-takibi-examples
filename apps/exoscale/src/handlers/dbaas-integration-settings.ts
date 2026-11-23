import { OpenAPIHono } from '@hono/zod-openapi'
import { getDbaasIntegrationSettingsIntegrationTypeSourceTypeDestTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const dbaasIntegrationSettingsHandler = app.openapi(
  getDbaasIntegrationSettingsIntegrationTypeSourceTypeDestTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
