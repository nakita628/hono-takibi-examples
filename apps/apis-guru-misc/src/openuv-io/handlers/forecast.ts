import { OpenAPIHono } from '@hono/zod-openapi'
import { getForecastRoute } from '../routes'

const app = new OpenAPIHono()

export const forecastHandler = app.openapi(getForecastRoute, (c) => {
  throw new Error('Not implemented')
})
