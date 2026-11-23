import { OpenAPIHono } from '@hono/zod-openapi'
import { getGeocodeReverseRoute } from '../routes'

const app = new OpenAPIHono()

export const geocodeReverseHandler = app.openapi(getGeocodeReverseRoute, (c) => {
  throw new Error('Not implemented')
})
