import { OpenAPIHono } from '@hono/zod-openapi'
import { getZonesZoneIdBotManagementRoute, putZonesZoneIdBotManagementRoute } from '../routes'

const app = new OpenAPIHono()

export const botSettingsHandler = app
  .openapi(getZonesZoneIdBotManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdBotManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
