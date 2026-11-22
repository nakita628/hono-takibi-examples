import { OpenAPIHono } from '@hono/zod-openapi'
import { getZonesZoneIdCtAlertingRoute, patchZonesZoneIdCtAlertingRoute } from '../routes'

const app = new OpenAPIHono()

export const ctAlertingHandler = app
  .openapi(getZonesZoneIdCtAlertingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdCtAlertingRoute, (c) => {
    throw new Error('Not implemented')
  })
