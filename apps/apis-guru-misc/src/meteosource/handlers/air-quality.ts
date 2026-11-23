import { OpenAPIHono } from '@hono/zod-openapi'
import { getAirQualityRoute } from '../routes'

const app = new OpenAPIHono()

export const airQualityHandler = app.openapi(getAirQualityRoute, (c) => {
  throw new Error('Not implemented')
})
