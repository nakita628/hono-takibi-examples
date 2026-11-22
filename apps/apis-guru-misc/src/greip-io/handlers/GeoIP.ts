import { OpenAPIHono } from '@hono/zod-openapi'
import { getGeoIPRoute } from '../routes'

const app = new OpenAPIHono()

export const GeoIPHandler = app.openapi(getGeoIPRoute, (c) => {
  throw new Error('Not implemented')
})
