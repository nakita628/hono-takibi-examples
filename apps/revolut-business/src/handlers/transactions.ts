import { OpenAPIHono } from '@hono/zod-openapi'
import { getTransactionIdRoute, getTransactionsRoute } from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app
  .openapi(getTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
