import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDeliverySlipsIdRoute,
  getDeliverySlipsRoute,
  getDeliverySlipsTemplatesRoute,
  getInvoicesIdRoute,
  getInvoicesRoute,
  getInvoicesTemplatesRoute,
  getPaymentNoticesIdRoute,
  getPaymentNoticesRoute,
  getPaymentNoticesTemplatesRoute,
  getPurchaseOrdersIdRoute,
  getPurchaseOrdersRoute,
  getPurchaseOrdersTemplatesRoute,
  getQuotationsIdRoute,
  getQuotationsRoute,
  getQuotationsTemplatesRoute,
  getReceiptsIdRoute,
  getReceiptsRoute,
  getReceiptsTemplatesRoute,
  postDeliverySlipsRoute,
  postInvoicesRoute,
  postPaymentNoticesRoute,
  postPurchaseOrdersRoute,
  postQuotationsRoute,
  postReceiptsRoute,
  putDeliverySlipsIdCancelRoute,
  putDeliverySlipsIdRoute,
  putDeliverySlipsIdUncancelRoute,
  putInvoicesIdCancelRoute,
  putInvoicesIdRoute,
  putInvoicesIdUncancelRoute,
  putPaymentNoticesIdCancelRoute,
  putPaymentNoticesIdRoute,
  putPaymentNoticesIdUncancelRoute,
  putPurchaseOrdersIdCancelRoute,
  putPurchaseOrdersIdRoute,
  putPurchaseOrdersIdUncancelRoute,
  putQuotationsIdCancelRoute,
  putQuotationsIdRoute,
  putQuotationsIdUncancelRoute,
  putReceiptsIdCancelRoute,
  putReceiptsIdRoute,
  putReceiptsIdUncancelRoute,
} from './routes'
import {
  getDeliverySlipsIdRouteHandler,
  getDeliverySlipsRouteHandler,
  getDeliverySlipsTemplatesRouteHandler,
  getInvoicesIdRouteHandler,
  getInvoicesRouteHandler,
  getInvoicesTemplatesRouteHandler,
  getPaymentNoticesIdRouteHandler,
  getPaymentNoticesRouteHandler,
  getPaymentNoticesTemplatesRouteHandler,
  getPurchaseOrdersIdRouteHandler,
  getPurchaseOrdersRouteHandler,
  getPurchaseOrdersTemplatesRouteHandler,
  getQuotationsIdRouteHandler,
  getQuotationsRouteHandler,
  getQuotationsTemplatesRouteHandler,
  getReceiptsIdRouteHandler,
  getReceiptsRouteHandler,
  getReceiptsTemplatesRouteHandler,
  postDeliverySlipsRouteHandler,
  postInvoicesRouteHandler,
  postPaymentNoticesRouteHandler,
  postPurchaseOrdersRouteHandler,
  postQuotationsRouteHandler,
  postReceiptsRouteHandler,
  putDeliverySlipsIdCancelRouteHandler,
  putDeliverySlipsIdRouteHandler,
  putDeliverySlipsIdUncancelRouteHandler,
  putInvoicesIdCancelRouteHandler,
  putInvoicesIdRouteHandler,
  putInvoicesIdUncancelRouteHandler,
  putPaymentNoticesIdCancelRouteHandler,
  putPaymentNoticesIdRouteHandler,
  putPaymentNoticesIdUncancelRouteHandler,
  putPurchaseOrdersIdCancelRouteHandler,
  putPurchaseOrdersIdRouteHandler,
  putPurchaseOrdersIdUncancelRouteHandler,
  putQuotationsIdCancelRouteHandler,
  putQuotationsIdRouteHandler,
  putQuotationsIdUncancelRouteHandler,
  putReceiptsIdCancelRouteHandler,
  putReceiptsIdRouteHandler,
  putReceiptsIdUncancelRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getDeliverySlipsRoute, getDeliverySlipsRouteHandler)
  .openapi(postDeliverySlipsRoute, postDeliverySlipsRouteHandler)
  .openapi(getDeliverySlipsTemplatesRoute, getDeliverySlipsTemplatesRouteHandler)
  .openapi(getDeliverySlipsIdRoute, getDeliverySlipsIdRouteHandler)
  .openapi(putDeliverySlipsIdRoute, putDeliverySlipsIdRouteHandler)
  .openapi(putDeliverySlipsIdCancelRoute, putDeliverySlipsIdCancelRouteHandler)
  .openapi(putDeliverySlipsIdUncancelRoute, putDeliverySlipsIdUncancelRouteHandler)
  .openapi(getInvoicesRoute, getInvoicesRouteHandler)
  .openapi(postInvoicesRoute, postInvoicesRouteHandler)
  .openapi(getInvoicesTemplatesRoute, getInvoicesTemplatesRouteHandler)
  .openapi(getInvoicesIdRoute, getInvoicesIdRouteHandler)
  .openapi(putInvoicesIdRoute, putInvoicesIdRouteHandler)
  .openapi(putInvoicesIdCancelRoute, putInvoicesIdCancelRouteHandler)
  .openapi(putInvoicesIdUncancelRoute, putInvoicesIdUncancelRouteHandler)
  .openapi(getPaymentNoticesRoute, getPaymentNoticesRouteHandler)
  .openapi(postPaymentNoticesRoute, postPaymentNoticesRouteHandler)
  .openapi(getPaymentNoticesTemplatesRoute, getPaymentNoticesTemplatesRouteHandler)
  .openapi(getPaymentNoticesIdRoute, getPaymentNoticesIdRouteHandler)
  .openapi(putPaymentNoticesIdRoute, putPaymentNoticesIdRouteHandler)
  .openapi(putPaymentNoticesIdCancelRoute, putPaymentNoticesIdCancelRouteHandler)
  .openapi(putPaymentNoticesIdUncancelRoute, putPaymentNoticesIdUncancelRouteHandler)
  .openapi(getPurchaseOrdersRoute, getPurchaseOrdersRouteHandler)
  .openapi(postPurchaseOrdersRoute, postPurchaseOrdersRouteHandler)
  .openapi(getPurchaseOrdersTemplatesRoute, getPurchaseOrdersTemplatesRouteHandler)
  .openapi(getPurchaseOrdersIdRoute, getPurchaseOrdersIdRouteHandler)
  .openapi(putPurchaseOrdersIdRoute, putPurchaseOrdersIdRouteHandler)
  .openapi(putPurchaseOrdersIdCancelRoute, putPurchaseOrdersIdCancelRouteHandler)
  .openapi(putPurchaseOrdersIdUncancelRoute, putPurchaseOrdersIdUncancelRouteHandler)
  .openapi(getQuotationsRoute, getQuotationsRouteHandler)
  .openapi(postQuotationsRoute, postQuotationsRouteHandler)
  .openapi(getQuotationsTemplatesRoute, getQuotationsTemplatesRouteHandler)
  .openapi(getQuotationsIdRoute, getQuotationsIdRouteHandler)
  .openapi(putQuotationsIdRoute, putQuotationsIdRouteHandler)
  .openapi(putQuotationsIdCancelRoute, putQuotationsIdCancelRouteHandler)
  .openapi(putQuotationsIdUncancelRoute, putQuotationsIdUncancelRouteHandler)
  .openapi(getReceiptsRoute, getReceiptsRouteHandler)
  .openapi(postReceiptsRoute, postReceiptsRouteHandler)
  .openapi(getReceiptsTemplatesRoute, getReceiptsTemplatesRouteHandler)
  .openapi(getReceiptsIdRoute, getReceiptsIdRouteHandler)
  .openapi(putReceiptsIdRoute, putReceiptsIdRouteHandler)
  .openapi(putReceiptsIdCancelRoute, putReceiptsIdCancelRouteHandler)
  .openapi(putReceiptsIdUncancelRoute, putReceiptsIdUncancelRouteHandler)

export default app
