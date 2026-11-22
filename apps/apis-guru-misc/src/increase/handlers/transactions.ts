import { OpenAPIHono } from '@hono/zod-openapi'
import { getTransactionsRoute, getTransactionsTransactionIdRoute } from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app
  .openapi(getTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
