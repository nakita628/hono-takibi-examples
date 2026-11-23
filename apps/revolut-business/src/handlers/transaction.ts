import { OpenAPIHono } from '@hono/zod-openapi'
import { getTransactionIdRoute } from '../routes'

const app = new OpenAPIHono()

export const transactionHandler = app.openapi(getTransactionIdRoute, (c) => {
  throw new Error('Not implemented')
})
