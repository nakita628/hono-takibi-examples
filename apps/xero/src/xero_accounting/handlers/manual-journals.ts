import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getManualJournalsManualJournalIDAttachmentsAttachmentIDRoute,
  getManualJournalsManualJournalIDAttachmentsFileNameRoute,
  getManualJournalsManualJournalIDAttachmentsRoute,
  getManualJournalsManualJournalIDHistoryRoute,
  getManualJournalsManualJournalIDRoute,
  getManualJournalsRoute,
  postManualJournalsManualJournalIDAttachmentsFileNameRoute,
  postManualJournalsManualJournalIDRoute,
  postManualJournalsRoute,
  putManualJournalsManualJournalIDAttachmentsFileNameRoute,
  putManualJournalsManualJournalIDHistoryRoute,
  putManualJournalsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const manualJournalsHandler = app
  .openapi(getManualJournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putManualJournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManualJournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManualJournalsManualJournalIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManualJournalsManualJournalIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManualJournalsManualJournalIDAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManualJournalsManualJournalIDAttachmentsAttachmentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManualJournalsManualJournalIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManualJournalsManualJournalIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putManualJournalsManualJournalIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManualJournalsManualJournalIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putManualJournalsManualJournalIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
