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
} from './routes'
import {
  getGiftcardsGiftCardIDRouteHandler,
  getGiftcardsGiftCardIDTransactionsRouteHandler,
  getGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationRouteHandler,
  getGiftcardsGiftCardIDTransactionsTransactionIDCancellationsRouteHandler,
  getGiftcardsGiftCardIDTransactionsTransactionIDRouteHandler,
  getGiftcardsGiftCardIDTransactionsTransactionIDSettlementsRouteHandler,
  postGiftcardsGiftCardIDTransactionsRouteHandler,
  postGiftcardsGiftCardIDTransactionsTransactionIDCancellationsRouteHandler,
  postGiftcardsGiftCardIDTransactionsTransactionIDSettlementsRouteHandler,
  postGiftcardsRouteHandler,
  postGiftcardsSearchRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postGiftcardsRoute, postGiftcardsRouteHandler)
  .openapi(postGiftcardsSearchRoute, postGiftcardsSearchRouteHandler)
  .openapi(getGiftcardsGiftCardIDRoute, getGiftcardsGiftCardIDRouteHandler)
  .openapi(getGiftcardsGiftCardIDTransactionsRoute, getGiftcardsGiftCardIDTransactionsRouteHandler)
  .openapi(
    postGiftcardsGiftCardIDTransactionsRoute,
    postGiftcardsGiftCardIDTransactionsRouteHandler,
  )
  .openapi(
    getGiftcardsGiftCardIDTransactionsTransactionIDRoute,
    getGiftcardsGiftCardIDTransactionsTransactionIDRouteHandler,
  )
  .openapi(
    getGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationRoute,
    getGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationRouteHandler,
  )
  .openapi(
    getGiftcardsGiftCardIDTransactionsTransactionIDCancellationsRoute,
    getGiftcardsGiftCardIDTransactionsTransactionIDCancellationsRouteHandler,
  )
  .openapi(
    postGiftcardsGiftCardIDTransactionsTransactionIDCancellationsRoute,
    postGiftcardsGiftCardIDTransactionsTransactionIDCancellationsRouteHandler,
  )
  .openapi(
    getGiftcardsGiftCardIDTransactionsTransactionIDSettlementsRoute,
    getGiftcardsGiftCardIDTransactionsTransactionIDSettlementsRouteHandler,
  )
  .openapi(
    postGiftcardsGiftCardIDTransactionsTransactionIDSettlementsRoute,
    postGiftcardsGiftCardIDTransactionsTransactionIDSettlementsRouteHandler,
  )

export default app
