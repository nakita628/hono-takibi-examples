import { OpenAPIHono } from '@hono/zod-openapi'
import { getZonesZoneIdSmartShieldRoute, patchZonesZoneIdSmartShieldRoute } from '../routes'

const app = new OpenAPIHono()

export const smartShieldSettingsHandler = app
  .openapi(getZonesZoneIdSmartShieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdSmartShieldRoute, (c) => {
    throw new Error('Not implemented')
  })
