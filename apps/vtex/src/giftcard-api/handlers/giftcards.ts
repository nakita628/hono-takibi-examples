import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGiftcardsGiftCardIDRoute,
  getGiftcardsGiftCardIDTransactionsRoute,
  getGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationRoute,
  getGiftcardsGiftCardIDTransactionsTransactionIDCancellationsRoute,
  getGiftcardsGiftCardIDTransactionsTransactionIDRoute,
  getGiftcardsGiftCardIDTransactionsTransactionIDSettlementsRoute,
  postGiftcardsGiftCardIDTransactionsRoute,
  postGiftcardsGiftCardIDTransactionsTransactionIDCancellationsRoute,
  postGiftcardsGiftCardIDTransactionsTransactionIDSettlementsRoute,
  postGiftcardsRoute,
  postGiftcardsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const giftcardsHandler = app
  .openapi(postGiftcardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGiftcardsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGiftcardsGiftCardIDRoute, (c) => {
    throw new Error('Not implemented')
  })
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
