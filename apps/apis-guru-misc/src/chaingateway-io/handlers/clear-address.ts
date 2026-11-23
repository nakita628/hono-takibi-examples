import { OpenAPIHono } from '@hono/zod-openapi'
import { postClearAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const clearAddressHandler = app.openapi(postClearAddressRoute, (c) => {
  throw new Error('Not implemented')
})
