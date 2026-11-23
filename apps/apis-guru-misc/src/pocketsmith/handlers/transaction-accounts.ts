import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTransactionAccountsIdRoute,
  getTransactionAccountsIdTransactionsRoute,
  postTransactionAccountsIdTransactionsRoute,
  putTransactionAccountsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionAccountsHandler = app
  .openapi(getTransactionAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTransactionAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionAccountsIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionAccountsIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
