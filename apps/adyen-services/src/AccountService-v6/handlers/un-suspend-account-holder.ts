import { OpenAPIHono } from '@hono/zod-openapi'
import { postUnSuspendAccountHolderRoute } from '../routes'

const app = new OpenAPIHono()

export const unSuspendAccountHolderHandler = app.openapi(postUnSuspendAccountHolderRoute, (c) => {
  throw new Error('Not implemented')
})
