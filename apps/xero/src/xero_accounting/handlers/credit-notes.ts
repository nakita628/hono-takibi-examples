import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCreditNotesCreditNoteIDAllocationsAllocationIDRoute,
  getCreditNotesCreditNoteIDAttachmentsAttachmentIDRoute,
  getCreditNotesCreditNoteIDAttachmentsFileNameRoute,
  getCreditNotesCreditNoteIDAttachmentsRoute,
  getCreditNotesCreditNoteIDHistoryRoute,
  getCreditNotesCreditNoteIDPdfRoute,
  getCreditNotesCreditNoteIDRoute,
  getCreditNotesRoute,
  postCreditNotesCreditNoteIDAttachmentsFileNameRoute,
  postCreditNotesCreditNoteIDRoute,
  postCreditNotesRoute,
  putCreditNotesCreditNoteIDAllocationsRoute,
  putCreditNotesCreditNoteIDAttachmentsFileNameRoute,
  putCreditNotesCreditNoteIDHistoryRoute,
  putCreditNotesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const creditNotesHandler = app
  .openapi(getCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreditNotesCreditNoteIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditNotesCreditNoteIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreditNotesCreditNoteIDAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreditNotesCreditNoteIDAttachmentsAttachmentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreditNotesCreditNoteIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditNotesCreditNoteIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCreditNotesCreditNoteIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreditNotesCreditNoteIDPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCreditNotesCreditNoteIDAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCreditNotesCreditNoteIDAllocationsAllocationIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreditNotesCreditNoteIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCreditNotesCreditNoteIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
