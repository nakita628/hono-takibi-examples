import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLinkedTransactionsLinkedTransactionIDRoute,
  getLinkedTransactionsLinkedTransactionIDRoute,
  getLinkedTransactionsRoute,
  postLinkedTransactionsLinkedTransactionIDRoute,
  putLinkedTransactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const linkedTransactionsHandler = app
  .openapi(getLinkedTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLinkedTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinkedTransactionsLinkedTransactionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinkedTransactionsLinkedTransactionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLinkedTransactionsLinkedTransactionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
