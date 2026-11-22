import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3FareEstimateMinZoneMinZoneMaxZoneMaxZoneRoute } from '../routes'

const app = new OpenAPIHono()

export const fareEstimateHandler = app.openapi(
  getV3FareEstimateMinZoneMinZoneMaxZoneMaxZoneRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
