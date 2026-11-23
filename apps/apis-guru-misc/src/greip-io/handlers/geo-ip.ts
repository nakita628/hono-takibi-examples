import { OpenAPIHono } from '@hono/zod-openapi'
import { getGeoIPRoute } from '../routes'

const app = new OpenAPIHono()

export const geoIpHandler = app.openapi(getGeoIPRoute, (c) => {
  throw new Error('Not implemented')
})
