import { OpenAPIHono } from '@hono/zod-openapi'
import { postTransactionRoute } from '../routes'

const app = new OpenAPIHono()

export const transactionHandler = app.openapi(postTransactionRoute, (c) => {
  throw new Error('Not implemented')
})
