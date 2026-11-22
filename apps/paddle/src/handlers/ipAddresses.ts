import { OpenAPIHono } from '@hono/zod-openapi'
import { getIpsRoute } from '../routes'

const app = new OpenAPIHono()

export const ipAddressesHandler = app.openapi(getIpsRoute, (c) => {
  throw new Error('Not implemented')
})
