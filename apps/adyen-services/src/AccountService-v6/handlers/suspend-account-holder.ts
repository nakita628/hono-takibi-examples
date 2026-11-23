import { OpenAPIHono } from '@hono/zod-openapi'
import { postSuspendAccountHolderRoute } from '../routes'

const app = new OpenAPIHono()

export const suspendAccountHolderHandler = app.openapi(postSuspendAccountHolderRoute, (c) => {
  throw new Error('Not implemented')
})
