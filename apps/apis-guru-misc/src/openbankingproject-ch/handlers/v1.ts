import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ConsentsConsentIdRoute,
  deleteV1PaymentServicePaymentProductPaymentIdRoute,
  deleteV1SigningBasketsBasketIdRoute,
  getV1AccountsAccountIdBalancesRoute,
  getV1AccountsAccountIdRoute,
  getV1AccountsAccountIdTransactionsRoute,
  getV1AccountsAccountIdTransactionsTransactionIdRoute,
  getV1AccountsRoute,
  getV1ConsentsConsentIdAuthorisationsAuthorisationIdRoute,
  getV1ConsentsConsentIdAuthorisationsRoute,
  getV1ConsentsConsentIdRoute,
  getV1ConsentsConsentIdStatusRoute,
  getV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdRoute,
  getV1PaymentServicePaymentProductPaymentIdAuthorisationsRoute,
  getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdRoute,
  getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsRoute,
  getV1PaymentServicePaymentProductPaymentIdRoute,
  getV1PaymentServicePaymentProductPaymentIdStatusRoute,
  getV1SigningBasketsBasketIdAuthorisationsAuthorisationIdRoute,
  getV1SigningBasketsBasketIdAuthorisationsRoute,
  getV1SigningBasketsBasketIdRoute,
  getV1SigningBasketsBasketIdStatusRoute,
  postV1ConsentsConsentIdAuthorisationsRoute,
  postV1ConsentsRoute,
  postV1FundsConfirmationsRoute,
  postV1PaymentServicePaymentProductPaymentIdAuthorisationsRoute,
  postV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsRoute,
  postV1PaymentServicePaymentProductRoute,
  postV1SigningBasketsBasketIdAuthorisationsRoute,
  postV1SigningBasketsRoute,
  putV1ConsentsConsentIdAuthorisationsAuthorisationIdRoute,
  putV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdRoute,
  putV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdRoute,
  putV1SigningBasketsBasketIdAuthorisationsAuthorisationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConsentsConsentIdAuthorisationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConsentsConsentIdAuthorisationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConsentsConsentIdAuthorisationsAuthorisationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConsentsConsentIdAuthorisationsAuthorisationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConsentsConsentIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FundsConfirmationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SigningBasketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SigningBasketsBasketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SigningBasketsBasketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SigningBasketsBasketIdAuthorisationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SigningBasketsBasketIdAuthorisationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SigningBasketsBasketIdAuthorisationsAuthorisationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SigningBasketsBasketIdAuthorisationsAuthorisationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SigningBasketsBasketIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentServicePaymentProductRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PaymentServicePaymentProductPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentServicePaymentProductPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentServicePaymentProductPaymentIdAuthorisationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentServicePaymentProductPaymentIdAuthorisationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1PaymentServicePaymentProductPaymentIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
