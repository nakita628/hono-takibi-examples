import { OpenAPIHono } from '@hono/zod-openapi'
import { postListAddressesRoute } from '../routes'

const app = new OpenAPIHono()

export const listAddressesHandler = app.openapi(postListAddressesRoute, (c) => {
  throw new Error('Not implemented')
})
