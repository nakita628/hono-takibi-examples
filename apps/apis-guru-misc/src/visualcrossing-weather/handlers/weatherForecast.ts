import { OpenAPIHono } from '@hono/zod-openapi'
import { getVisualCrossingWebServicesRestServicesWeatherdataForecastRoute } from '../routes'

const app = new OpenAPIHono()

export const weatherForecastHandler = app.openapi(
  getVisualCrossingWebServicesRestServicesWeatherdataForecastRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
