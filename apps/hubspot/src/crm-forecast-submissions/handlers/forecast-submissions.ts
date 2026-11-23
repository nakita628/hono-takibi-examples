import { OpenAPIHono } from '@hono/zod-openapi'
import { getForecastSubmissions202609EventsRoute } from '../routes'

const app = new OpenAPIHono()

export const forecastSubmissionsHandler = app.openapi(
  getForecastSubmissions202609EventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
