import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateAccountHolderRoute } from '../routes'

const app = new OpenAPIHono()

export const updateAccountHolderHandler = app.openapi(postUpdateAccountHolderRoute, (c) => {
  throw new Error('Not implemented')
})
