import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCreditNotesCreditNoteIdDownloadEinvoiceRoute,
  getCreditNotesCreditNoteIdRoute,
  getCreditNotesRoute,
  postCreditNotesCreditNoteIdDeleteRoute,
  postCreditNotesCreditNoteIdPdfRoute,
  postCreditNotesCreditNoteIdRecordRefundRoute,
  postCreditNotesCreditNoteIdRefundRoute,
  postCreditNotesCreditNoteIdRemoveTaxWithheldRefundRoute,
  postCreditNotesCreditNoteIdResendEinvoiceRoute,
  postCreditNotesCreditNoteIdSendEinvoiceRoute,
  postCreditNotesCreditNoteIdSendEmailRoute,
  postCreditNotesCreditNoteIdUpdateRoute,
  postCreditNotesCreditNoteIdVoidRoute,
  postCreditNotesImportCreditNoteRoute,
  postCreditNotesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const creditNotesHandler = app
  .openapi(postCreditNotesCreditNoteIdRecordRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditNotesImportCreditNoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditNotesCreditNoteIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditNotesCreditNoteIdPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditNotesCreditNoteIdSendEinvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditNotesCreditNoteIdVoidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditNotesCreditNoteIdRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditNotesCreditNoteIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreditNotesCreditNoteIdDownloadEinvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditNotesCreditNoteIdResendEinvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditNotesCreditNoteIdRemoveTaxWithheldRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreditNotesCreditNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditNotesCreditNoteIdSendEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
