import { OpenAPIHono } from '@hono/zod-openapi'
import { postListSubscribedAddressesRoute } from '../routes'

const app = new OpenAPIHono()

export const listSubscribedAddressesHandler = app.openapi(postListSubscribedAddressesRoute, (c) => {
  throw new Error('Not implemented')
})
