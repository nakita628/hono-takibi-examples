import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBankTransfersBankTransferIDAttachmentsAttachmentIDRoute,
  getBankTransfersBankTransferIDAttachmentsFileNameRoute,
  getBankTransfersBankTransferIDAttachmentsRoute,
  getBankTransfersBankTransferIDHistoryRoute,
  getBankTransfersBankTransferIDRoute,
  getBankTransfersRoute,
  postBankTransfersBankTransferIDAttachmentsFileNameRoute,
  postBankTransfersBankTransferIDRoute,
  postBankTransfersRoute,
  putBankTransfersBankTransferIDAttachmentsFileNameRoute,
  putBankTransfersBankTransferIDHistoryRoute,
  putBankTransfersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bankTransfersHandler = app
  .openapi(getBankTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBankTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankTransfersBankTransferIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransfersBankTransferIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankTransfersBankTransferIDAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankTransfersBankTransferIDAttachmentsAttachmentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankTransfersBankTransferIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransfersBankTransferIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBankTransfersBankTransferIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankTransfersBankTransferIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBankTransfersBankTransferIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
