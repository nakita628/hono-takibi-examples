import { OpenAPIHono } from '@hono/zod-openapi'
import { getZonesZoneIdCloudConnectorRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const zoneCloudConnectorRulesGETHandler = app.openapi(
  getZonesZoneIdCloudConnectorRulesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
