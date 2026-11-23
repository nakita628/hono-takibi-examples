import { OpenAPIHono } from '@hono/zod-openapi'
import { getAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const addressHandler = app.openapi(getAddressRoute, (c) => {
  throw new Error('Not implemented')
})
