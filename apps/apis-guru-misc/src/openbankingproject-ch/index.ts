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
} from './routes'
import {
  deleteV1ConsentsConsentIdRouteHandler,
  deleteV1PaymentServicePaymentProductPaymentIdRouteHandler,
  deleteV1SigningBasketsBasketIdRouteHandler,
  getV1AccountsAccountIdBalancesRouteHandler,
  getV1AccountsAccountIdRouteHandler,
  getV1AccountsAccountIdTransactionsRouteHandler,
  getV1AccountsAccountIdTransactionsTransactionIdRouteHandler,
  getV1AccountsRouteHandler,
  getV1ConsentsConsentIdAuthorisationsAuthorisationIdRouteHandler,
  getV1ConsentsConsentIdAuthorisationsRouteHandler,
  getV1ConsentsConsentIdRouteHandler,
  getV1ConsentsConsentIdStatusRouteHandler,
  getV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdRouteHandler,
  getV1PaymentServicePaymentProductPaymentIdAuthorisationsRouteHandler,
  getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdRouteHandler,
  getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsRouteHandler,
  getV1PaymentServicePaymentProductPaymentIdRouteHandler,
  getV1PaymentServicePaymentProductPaymentIdStatusRouteHandler,
  getV1SigningBasketsBasketIdAuthorisationsAuthorisationIdRouteHandler,
  getV1SigningBasketsBasketIdAuthorisationsRouteHandler,
  getV1SigningBasketsBasketIdRouteHandler,
  getV1SigningBasketsBasketIdStatusRouteHandler,
  postV1ConsentsConsentIdAuthorisationsRouteHandler,
  postV1ConsentsRouteHandler,
  postV1FundsConfirmationsRouteHandler,
  postV1PaymentServicePaymentProductPaymentIdAuthorisationsRouteHandler,
  postV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsRouteHandler,
  postV1PaymentServicePaymentProductRouteHandler,
  postV1SigningBasketsBasketIdAuthorisationsRouteHandler,
  postV1SigningBasketsRouteHandler,
  putV1ConsentsConsentIdAuthorisationsAuthorisationIdRouteHandler,
  putV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdRouteHandler,
  putV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdRouteHandler,
  putV1SigningBasketsBasketIdAuthorisationsAuthorisationIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1AccountsRoute, getV1AccountsRouteHandler)
  .openapi(getV1AccountsAccountIdRoute, getV1AccountsAccountIdRouteHandler)
  .openapi(getV1AccountsAccountIdBalancesRoute, getV1AccountsAccountIdBalancesRouteHandler)
  .openapi(getV1AccountsAccountIdTransactionsRoute, getV1AccountsAccountIdTransactionsRouteHandler)
  .openapi(
    getV1AccountsAccountIdTransactionsTransactionIdRoute,
    getV1AccountsAccountIdTransactionsTransactionIdRouteHandler,
  )
  .openapi(postV1ConsentsRoute, postV1ConsentsRouteHandler)
  .openapi(deleteV1ConsentsConsentIdRoute, deleteV1ConsentsConsentIdRouteHandler)
  .openapi(getV1ConsentsConsentIdRoute, getV1ConsentsConsentIdRouteHandler)
  .openapi(
    getV1ConsentsConsentIdAuthorisationsRoute,
    getV1ConsentsConsentIdAuthorisationsRouteHandler,
  )
  .openapi(
    postV1ConsentsConsentIdAuthorisationsRoute,
    postV1ConsentsConsentIdAuthorisationsRouteHandler,
  )
  .openapi(
    getV1ConsentsConsentIdAuthorisationsAuthorisationIdRoute,
    getV1ConsentsConsentIdAuthorisationsAuthorisationIdRouteHandler,
  )
  .openapi(
    putV1ConsentsConsentIdAuthorisationsAuthorisationIdRoute,
    putV1ConsentsConsentIdAuthorisationsAuthorisationIdRouteHandler,
  )
  .openapi(getV1ConsentsConsentIdStatusRoute, getV1ConsentsConsentIdStatusRouteHandler)
  .openapi(postV1FundsConfirmationsRoute, postV1FundsConfirmationsRouteHandler)
  .openapi(postV1SigningBasketsRoute, postV1SigningBasketsRouteHandler)
  .openapi(deleteV1SigningBasketsBasketIdRoute, deleteV1SigningBasketsBasketIdRouteHandler)
  .openapi(getV1SigningBasketsBasketIdRoute, getV1SigningBasketsBasketIdRouteHandler)
  .openapi(
    getV1SigningBasketsBasketIdAuthorisationsRoute,
    getV1SigningBasketsBasketIdAuthorisationsRouteHandler,
  )
  .openapi(
    postV1SigningBasketsBasketIdAuthorisationsRoute,
    postV1SigningBasketsBasketIdAuthorisationsRouteHandler,
  )
  .openapi(
    getV1SigningBasketsBasketIdAuthorisationsAuthorisationIdRoute,
    getV1SigningBasketsBasketIdAuthorisationsAuthorisationIdRouteHandler,
  )
  .openapi(
    putV1SigningBasketsBasketIdAuthorisationsAuthorisationIdRoute,
    putV1SigningBasketsBasketIdAuthorisationsAuthorisationIdRouteHandler,
  )
  .openapi(getV1SigningBasketsBasketIdStatusRoute, getV1SigningBasketsBasketIdStatusRouteHandler)
  .openapi(postV1PaymentServicePaymentProductRoute, postV1PaymentServicePaymentProductRouteHandler)
  .openapi(
    deleteV1PaymentServicePaymentProductPaymentIdRoute,
    deleteV1PaymentServicePaymentProductPaymentIdRouteHandler,
  )
  .openapi(
    getV1PaymentServicePaymentProductPaymentIdRoute,
    getV1PaymentServicePaymentProductPaymentIdRouteHandler,
  )
  .openapi(
    getV1PaymentServicePaymentProductPaymentIdAuthorisationsRoute,
    getV1PaymentServicePaymentProductPaymentIdAuthorisationsRouteHandler,
  )
  .openapi(
    postV1PaymentServicePaymentProductPaymentIdAuthorisationsRoute,
    postV1PaymentServicePaymentProductPaymentIdAuthorisationsRouteHandler,
  )
  .openapi(
    getV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdRoute,
    getV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdRouteHandler,
  )
  .openapi(
    putV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdRoute,
    putV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdRouteHandler,
  )
  .openapi(
    getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsRoute,
    getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsRouteHandler,
  )
  .openapi(
    postV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsRoute,
    postV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsRouteHandler,
  )
  .openapi(
    getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdRoute,
    getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdRouteHandler,
  )
  .openapi(
    putV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdRoute,
    putV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdRouteHandler,
  )
  .openapi(
    getV1PaymentServicePaymentProductPaymentIdStatusRoute,
    getV1PaymentServicePaymentProductPaymentIdStatusRouteHandler,
  )

export default app
