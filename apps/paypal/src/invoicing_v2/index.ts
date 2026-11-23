import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2InvoicingInvoicesInvoiceIdPaymentsTransactionIdRoute,
  deleteV2InvoicingInvoicesInvoiceIdRefundsTransactionIdRoute,
  deleteV2InvoicingInvoicesInvoiceIdRoute,
  deleteV2InvoicingTemplatesTemplateIdRoute,
  getV2InvoicingAccountingSyncInvoicesIdConnectionsRoute,
  getV2InvoicingAccountingSyncMerchantConnectionsRoute,
  getV2InvoicingInvoicesInvoiceIdRoute,
  getV2InvoicingInvoicesRoute,
  getV2InvoicingTemplatesRoute,
  getV2InvoicingTemplatesTemplateIdRoute,
  postV2InvoicingGenerateNextInvoiceNumberRoute,
  postV2InvoicingInvoicesInvoiceIdCancelRoute,
  postV2InvoicingInvoicesInvoiceIdGenerateQrCodeRoute,
  postV2InvoicingInvoicesInvoiceIdPaymentsRoute,
  postV2InvoicingInvoicesInvoiceIdRefundsRoute,
  postV2InvoicingInvoicesInvoiceIdRemindRoute,
  postV2InvoicingInvoicesInvoiceIdSendRoute,
  postV2InvoicingInvoicesRoute,
  postV2InvoicingSearchInvoicesRoute,
  postV2InvoicingTemplatesRoute,
  putV2InvoicingInvoicesInvoiceIdRoute,
  putV2InvoicingTemplatesTemplateIdRoute,
} from './routes'
import {
  deleteV2InvoicingInvoicesInvoiceIdPaymentsTransactionIdRouteHandler,
  deleteV2InvoicingInvoicesInvoiceIdRefundsTransactionIdRouteHandler,
  deleteV2InvoicingInvoicesInvoiceIdRouteHandler,
  deleteV2InvoicingTemplatesTemplateIdRouteHandler,
  getV2InvoicingAccountingSyncInvoicesIdConnectionsRouteHandler,
  getV2InvoicingAccountingSyncMerchantConnectionsRouteHandler,
  getV2InvoicingInvoicesInvoiceIdRouteHandler,
  getV2InvoicingInvoicesRouteHandler,
  getV2InvoicingTemplatesRouteHandler,
  getV2InvoicingTemplatesTemplateIdRouteHandler,
  postV2InvoicingGenerateNextInvoiceNumberRouteHandler,
  postV2InvoicingInvoicesInvoiceIdCancelRouteHandler,
  postV2InvoicingInvoicesInvoiceIdGenerateQrCodeRouteHandler,
  postV2InvoicingInvoicesInvoiceIdPaymentsRouteHandler,
  postV2InvoicingInvoicesInvoiceIdRefundsRouteHandler,
  postV2InvoicingInvoicesInvoiceIdRemindRouteHandler,
  postV2InvoicingInvoicesInvoiceIdSendRouteHandler,
  postV2InvoicingInvoicesRouteHandler,
  postV2InvoicingSearchInvoicesRouteHandler,
  postV2InvoicingTemplatesRouteHandler,
  putV2InvoicingInvoicesInvoiceIdRouteHandler,
  putV2InvoicingTemplatesTemplateIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV2InvoicingInvoicesRoute, postV2InvoicingInvoicesRouteHandler)
  .openapi(getV2InvoicingInvoicesRoute, getV2InvoicingInvoicesRouteHandler)
  .openapi(
    postV2InvoicingInvoicesInvoiceIdSendRoute,
    postV2InvoicingInvoicesInvoiceIdSendRouteHandler,
  )
  .openapi(
    postV2InvoicingInvoicesInvoiceIdRemindRoute,
    postV2InvoicingInvoicesInvoiceIdRemindRouteHandler,
  )
  .openapi(
    postV2InvoicingInvoicesInvoiceIdCancelRoute,
    postV2InvoicingInvoicesInvoiceIdCancelRouteHandler,
  )
  .openapi(
    postV2InvoicingInvoicesInvoiceIdPaymentsRoute,
    postV2InvoicingInvoicesInvoiceIdPaymentsRouteHandler,
  )
  .openapi(
    deleteV2InvoicingInvoicesInvoiceIdPaymentsTransactionIdRoute,
    deleteV2InvoicingInvoicesInvoiceIdPaymentsTransactionIdRouteHandler,
  )
  .openapi(
    postV2InvoicingInvoicesInvoiceIdRefundsRoute,
    postV2InvoicingInvoicesInvoiceIdRefundsRouteHandler,
  )
  .openapi(
    deleteV2InvoicingInvoicesInvoiceIdRefundsTransactionIdRoute,
    deleteV2InvoicingInvoicesInvoiceIdRefundsTransactionIdRouteHandler,
  )
  .openapi(
    postV2InvoicingInvoicesInvoiceIdGenerateQrCodeRoute,
    postV2InvoicingInvoicesInvoiceIdGenerateQrCodeRouteHandler,
  )
  .openapi(
    postV2InvoicingGenerateNextInvoiceNumberRoute,
    postV2InvoicingGenerateNextInvoiceNumberRouteHandler,
  )
  .openapi(getV2InvoicingInvoicesInvoiceIdRoute, getV2InvoicingInvoicesInvoiceIdRouteHandler)
  .openapi(putV2InvoicingInvoicesInvoiceIdRoute, putV2InvoicingInvoicesInvoiceIdRouteHandler)
  .openapi(deleteV2InvoicingInvoicesInvoiceIdRoute, deleteV2InvoicingInvoicesInvoiceIdRouteHandler)
  .openapi(postV2InvoicingSearchInvoicesRoute, postV2InvoicingSearchInvoicesRouteHandler)
  .openapi(getV2InvoicingTemplatesRoute, getV2InvoicingTemplatesRouteHandler)
  .openapi(postV2InvoicingTemplatesRoute, postV2InvoicingTemplatesRouteHandler)
  .openapi(getV2InvoicingTemplatesTemplateIdRoute, getV2InvoicingTemplatesTemplateIdRouteHandler)
  .openapi(putV2InvoicingTemplatesTemplateIdRoute, putV2InvoicingTemplatesTemplateIdRouteHandler)
  .openapi(
    deleteV2InvoicingTemplatesTemplateIdRoute,
    deleteV2InvoicingTemplatesTemplateIdRouteHandler,
  )
  .openapi(
    getV2InvoicingAccountingSyncMerchantConnectionsRoute,
    getV2InvoicingAccountingSyncMerchantConnectionsRouteHandler,
  )
  .openapi(
    getV2InvoicingAccountingSyncInvoicesIdConnectionsRoute,
    getV2InvoicingAccountingSyncInvoicesIdConnectionsRouteHandler,
  )

export default app
