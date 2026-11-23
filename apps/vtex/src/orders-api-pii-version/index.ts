import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiOrdersPvtDocumentOrderIdRoute,
  postApiOrdersExtendsearchOrdersRoute,
  postApiOrdersPvtDocumentOrderIdActionsStartHandlingRoute,
  postApiOrdersPvtDocumentOrderIdCancelRoute,
  postApiOrdersPvtDocumentOrderIdInvoicesRoute,
  postApiOrdersPvtDocumentOrderIdPaymentPaymentIdNotifyPaymentRoute,
} from './routes'
import {
  getApiOrdersPvtDocumentOrderIdRouteHandler,
  postApiOrdersExtendsearchOrdersRouteHandler,
  postApiOrdersPvtDocumentOrderIdActionsStartHandlingRouteHandler,
  postApiOrdersPvtDocumentOrderIdCancelRouteHandler,
  postApiOrdersPvtDocumentOrderIdInvoicesRouteHandler,
  postApiOrdersPvtDocumentOrderIdPaymentPaymentIdNotifyPaymentRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApiOrdersExtendsearchOrdersRoute, postApiOrdersExtendsearchOrdersRouteHandler)
  .openapi(getApiOrdersPvtDocumentOrderIdRoute, getApiOrdersPvtDocumentOrderIdRouteHandler)
  .openapi(
    postApiOrdersPvtDocumentOrderIdActionsStartHandlingRoute,
    postApiOrdersPvtDocumentOrderIdActionsStartHandlingRouteHandler,
  )
  .openapi(
    postApiOrdersPvtDocumentOrderIdCancelRoute,
    postApiOrdersPvtDocumentOrderIdCancelRouteHandler,
  )
  .openapi(
    postApiOrdersPvtDocumentOrderIdInvoicesRoute,
    postApiOrdersPvtDocumentOrderIdInvoicesRouteHandler,
  )
  .openapi(
    postApiOrdersPvtDocumentOrderIdPaymentPaymentIdNotifyPaymentRoute,
    postApiOrdersPvtDocumentOrderIdPaymentPaymentIdNotifyPaymentRouteHandler,
  )

export default app
