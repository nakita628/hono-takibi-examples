import { OpenAPIHono } from '@hono/zod-openapi'
import { getLocationservicesAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const addressHandler = app.openapi(getLocationservicesAddressRoute, (c) => {
  throw new Error('Not implemented')
})
