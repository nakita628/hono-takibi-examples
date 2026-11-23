import { OpenAPIHono } from '@hono/zod-openapi'
import { postDebitAccountHolderRoute } from '../routes'

const app = new OpenAPIHono()

export const debitAccountHolderHandler = app.openapi(postDebitAccountHolderRoute, (c) => {
  throw new Error('Not implemented')
})
