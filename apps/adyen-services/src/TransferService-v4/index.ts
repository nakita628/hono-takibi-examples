import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGrantsIdRoute,
  getGrantsRoute,
  getTransactionsIdRoute,
  getTransactionsRoute,
  getTransfersIdRoute,
  getTransfersRoute,
  postCashoutsRoute,
  postGrantsRoute,
  postTransfersApproveRoute,
  postTransfersCancelRoute,
  postTransfersRoute,
  postTransfersTransferIdReturnsRoute,
} from './routes'
import {
  getGrantsIdRouteHandler,
  getGrantsRouteHandler,
  getTransactionsIdRouteHandler,
  getTransactionsRouteHandler,
  getTransfersIdRouteHandler,
  getTransfersRouteHandler,
  postCashoutsRouteHandler,
  postGrantsRouteHandler,
  postTransfersApproveRouteHandler,
  postTransfersCancelRouteHandler,
  postTransfersRouteHandler,
  postTransfersTransferIdReturnsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getGrantsRoute, getGrantsRouteHandler)
  .openapi(postGrantsRoute, postGrantsRouteHandler)
  .openapi(getGrantsIdRoute, getGrantsIdRouteHandler)
  .openapi(getTransactionsRoute, getTransactionsRouteHandler)
  .openapi(getTransactionsIdRoute, getTransactionsIdRouteHandler)
  .openapi(getTransfersRoute, getTransfersRouteHandler)
  .openapi(postTransfersRoute, postTransfersRouteHandler)
  .openapi(postTransfersApproveRoute, postTransfersApproveRouteHandler)
  .openapi(postTransfersCancelRoute, postTransfersCancelRouteHandler)
  .openapi(getTransfersIdRoute, getTransfersIdRouteHandler)
  .openapi(postTransfersTransferIdReturnsRoute, postTransfersTransferIdReturnsRouteHandler)
  .openapi(postCashoutsRoute, postCashoutsRouteHandler)

export default app
