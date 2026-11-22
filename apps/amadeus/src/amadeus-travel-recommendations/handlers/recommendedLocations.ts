import { OpenAPIHono } from '@hono/zod-openapi'
import { getReferenceDataRecommendedLocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const recommendedLocationsHandler = app.openapi(
  getReferenceDataRecommendedLocationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
