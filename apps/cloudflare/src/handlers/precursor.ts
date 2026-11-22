import { OpenAPIHono } from '@hono/zod-openapi'
import { getZonesZoneIdPrecursorRoute, putZonesZoneIdPrecursorRoute } from '../routes'

const app = new OpenAPIHono()

export const precursorHandler = app
  .openapi(getZonesZoneIdPrecursorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdPrecursorRoute, (c) => {
    throw new Error('Not implemented')
  })
