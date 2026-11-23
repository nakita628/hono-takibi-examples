import { OpenAPIHono } from '@hono/zod-openapi'
import { getAddressesRoute } from '../routes'

const app = new OpenAPIHono()

export const addressesHandler = app.openapi(getAddressesRoute, (c) => {
  throw new Error('Not implemented')
})
