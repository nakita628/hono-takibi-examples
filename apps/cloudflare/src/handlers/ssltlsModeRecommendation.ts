import { OpenAPIHono } from '@hono/zod-openapi'
import { getZonesZoneIdSslRecommendationRoute } from '../routes'

const app = new OpenAPIHono()

export const ssltlsModeRecommendationHandler = app.openapi(
  getZonesZoneIdSslRecommendationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
