import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGiftcardprovidersGiftCardProviderIDRoute,
  getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDRoute,
  getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsRoute,
  getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsRoute,
  getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsRoute,
  getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationRoute,
  getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDRoute,
  getGiftcardprovidersGiftCardProviderIdRoute,
  getGiftcardprovidersRoute,
  postGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsRoute,
  postGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsRoute,
  postGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsRoute,
  postGiftcardprovidersGiftCardProviderIDGiftcardsRoute,
  postGiftcardprovidersGiftCardProviderIDGiftcardsSearchRoute,
  putGiftcardprovidersGiftCardProviderIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const giftcardprovidersHandler = app
  .openapi(getGiftcardprovidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGiftcardprovidersGiftCardProviderIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGiftcardprovidersGiftCardProviderIDRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getGiftcardprovidersGiftCardProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
