import { OpenAPIHono } from '@hono/zod-openapi'
import { getGeoStatsRoute } from '../routes'

const app = new OpenAPIHono()

export const geoHandler = app.openapi(getGeoStatsRoute, (c) => {
  throw new Error('Not implemented')
})
