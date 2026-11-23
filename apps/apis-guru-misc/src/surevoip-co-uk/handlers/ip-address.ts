import { OpenAPIHono } from '@hono/zod-openapi'
import { getIpAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const ipAddressHandler = app.openapi(getIpAddressRoute, (c) => {
  throw new Error('Not implemented')
})
