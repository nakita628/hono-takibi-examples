import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGiftcardsGiftCardIDTransactionsRoute,
  getGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationRoute,
  getGiftcardsGiftCardIDTransactionsTransactionIDCancellationsRoute,
  getGiftcardsGiftCardIDTransactionsTransactionIDRoute,
  getGiftcardsGiftCardIDTransactionsTransactionIDSettlementsRoute,
  postGiftcardsGiftCardIDTransactionsRoute,
  postGiftcardsGiftCardIDTransactionsTransactionIDCancellationsRoute,
  postGiftcardsGiftCardIDTransactionsTransactionIDSettlementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionHandler = app
  .openapi(getGiftcardsGiftCardIDTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGiftcardsGiftCardIDTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGiftcardsGiftCardIDTransactionsTransactionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGiftcardsGiftCardIDTransactionsTransactionIDCancellationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGiftcardsGiftCardIDTransactionsTransactionIDCancellationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGiftcardsGiftCardIDTransactionsTransactionIDSettlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGiftcardsGiftCardIDTransactionsTransactionIDSettlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
