import { OpenAPIHono } from '@hono/zod-openapi'
import { getGeocodeRoute } from '../routes'

const app = new OpenAPIHono()

export const geocodingAPIHandler = app.openapi(getGeocodeRoute, (c) => {
  throw new Error('Not implemented')
})
