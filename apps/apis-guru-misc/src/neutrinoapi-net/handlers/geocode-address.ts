import { OpenAPIHono } from '@hono/zod-openapi'
import { getGeocodeAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const geocodeAddressHandler = app.openapi(getGeocodeAddressRoute, (c) => {
  throw new Error('Not implemented')
})
