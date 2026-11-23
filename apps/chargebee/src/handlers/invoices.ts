import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInvoicesInvoiceIdDownloadEinvoiceRoute,
  getInvoicesInvoiceIdPaymentSchedulesRoute,
  getInvoicesInvoiceIdPaymentsRoute,
  getInvoicesInvoiceIdPaymentVouchersRoute,
  getInvoicesInvoiceIdRoute,
  getInvoicesPaymentReferenceNumbersRoute,
  getInvoicesRoute,
  postInvoicesCreateForChargeItemsAndChargesRoute,
  postInvoicesImportInvoiceRoute,
  postInvoicesInvoiceIdAddChargeItemRoute,
  postInvoicesInvoiceIdAddChargeRoute,
  postInvoicesInvoiceIdApplyCreditsRoute,
  postInvoicesInvoiceIdApplyPaymentScheduleSchemeRoute,
  postInvoicesInvoiceIdApplyPaymentsRoute,
  postInvoicesInvoiceIdCloseRoute,
  postInvoicesInvoiceIdCollectPaymentRoute,
  postInvoicesInvoiceIdDeleteLineItemsRoute,
  postInvoicesInvoiceIdDeleteRoute,
  postInvoicesInvoiceIdPauseDunningRoute,
  postInvoicesInvoiceIdPdfRoute,
  postInvoicesInvoiceIdRecordPaymentRoute,
  postInvoicesInvoiceIdRecordRefundRoute,
  postInvoicesInvoiceIdRecordTaxWithheldRoute,
  postInvoicesInvoiceIdRefundRoute,
  postInvoicesInvoiceIdRemoveCreditNoteRoute,
  postInvoicesInvoiceIdRemovePaymentRoute,
  postInvoicesInvoiceIdRemovePaymentScheduleSchemeRoute,
  postInvoicesInvoiceIdRemoveTaxWithheldRoute,
  postInvoicesInvoiceIdResendEinvoiceRoute,
  postInvoicesInvoiceIdResumeDunningRoute,
  postInvoicesInvoiceIdSendEinvoiceRoute,
  postInvoicesInvoiceIdSendEmailRoute,
  postInvoicesInvoiceIdStopDunningRoute,
  postInvoicesInvoiceIdSyncUsagesRoute,
  postInvoicesInvoiceIdUpdateDetailsRoute,
  postInvoicesInvoiceIdVoidBeforeCaptureRoute,
  postInvoicesInvoiceIdVoidRoute,
  postInvoicesInvoiceIdWriteOffRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoicesHandler = app
  .openapi(postInvoicesInvoiceIdDeleteLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdRemoveCreditNoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdRemovePaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdStopDunningRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdApplyPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdApplyPaymentScheduleSchemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdVoidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdAddChargeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdSendEinvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesInvoiceIdPaymentSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdWriteOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdAddChargeItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdPauseDunningRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdVoidBeforeCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdApplyCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdSendEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesCreateForChargeItemsAndChargesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdUpdateDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdRecordPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesImportInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdResumeDunningRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdRecordTaxWithheldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdResendEinvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdRemoveTaxWithheldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesPaymentReferenceNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdRemovePaymentScheduleSchemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdCollectPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdSyncUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdRecordRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesInvoiceIdPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesInvoiceIdDownloadEinvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesInvoiceIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesInvoiceIdPaymentVouchersRoute, (c) => {
    throw new Error('Not implemented')
  })
