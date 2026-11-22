import { OpenAPIHono } from '@hono/zod-openapi'
import { getZonesZoneIdEntitlementsRoute } from '../routes'

const app = new OpenAPIHono()

export const zoneEntitlementsHandler = app.openapi(getZonesZoneIdEntitlementsRoute, (c) => {
  throw new Error('Not implemented')
})
