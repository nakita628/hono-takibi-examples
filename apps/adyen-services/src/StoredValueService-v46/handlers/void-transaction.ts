import { OpenAPIHono } from '@hono/zod-openapi'
import { postVoidTransactionRoute } from '../routes'

const app = new OpenAPIHono()

export const voidTransactionHandler = app.openapi(postVoidTransactionRoute, (c) => {
  throw new Error('Not implemented')
})
