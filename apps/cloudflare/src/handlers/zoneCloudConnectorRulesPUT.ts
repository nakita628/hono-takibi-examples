import { OpenAPIHono } from '@hono/zod-openapi'
import { putZonesZoneIdCloudConnectorRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const zoneCloudConnectorRulesPUTHandler = app.openapi(
  putZonesZoneIdCloudConnectorRulesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
