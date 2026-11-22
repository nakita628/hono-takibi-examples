import { OpenAPIHono } from '@hono/zod-openapi'
import { getVisualCrossingWebServicesRestServicesWeatherdataHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const historicalWeatherHandler = app.openapi(
  getVisualCrossingWebServicesRestServicesWeatherdataHistoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
