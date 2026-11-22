import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransactionLineItemsIdRoute,
  getApiTransactionLineItemsIdRoute,
  getApiTransactionLineItemsRoute,
  getApiTransactionsTransactionIdLineItemsRoute,
  postApiTransactionLineItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionLineItemHandler = app
  .openapi(getApiTransactionLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransactionLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransactionLineItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransactionLineItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransactionsTransactionIdLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
