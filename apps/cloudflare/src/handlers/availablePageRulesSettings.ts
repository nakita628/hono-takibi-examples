import { OpenAPIHono } from '@hono/zod-openapi'
import { getZonesZoneIdPagerulesSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const availablePageRulesSettingsHandler = app.openapi(
  getZonesZoneIdPagerulesSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
