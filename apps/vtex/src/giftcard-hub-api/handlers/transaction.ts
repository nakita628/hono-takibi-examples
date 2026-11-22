import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDRoute,
  getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsRoute,
  getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsRoute,
  getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsRoute,
  getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationRoute,
  getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDRoute,
  postGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsRoute,
  postGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsRoute,
  postGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsRoute,
  postGiftcardprovidersGiftCardProviderIDGiftcardsRoute,
  postGiftcardprovidersGiftCardProviderIDGiftcardsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionHandler = app
  .openapi(postGiftcardprovidersGiftCardProviderIDGiftcardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGiftcardprovidersGiftCardProviderIDGiftcardsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
