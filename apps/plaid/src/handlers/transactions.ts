import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postTransactionsEnrichRoute,
  postTransactionsGetRoute,
  postTransactionsRecurringGetRoute,
  postTransactionsRefreshRoute,
  postTransactionsSyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app
  .openapi(postTransactionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsRecurringGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsEnrichRoute, (c) => {
    throw new Error('Not implemented')
  })
