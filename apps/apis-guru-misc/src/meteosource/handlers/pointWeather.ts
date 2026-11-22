import { OpenAPIHono } from '@hono/zod-openapi'
import { getAirQualityRoute, getPointRoute } from '../routes'

const app = new OpenAPIHono()

export const pointWeatherHandler = app
  .openapi(getAirQualityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPointRoute, (c) => {
    throw new Error('Not implemented')
  })
