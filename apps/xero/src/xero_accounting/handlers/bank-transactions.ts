import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBankTransactionsBankTransactionIDAttachmentsAttachmentIDRoute,
  getBankTransactionsBankTransactionIDAttachmentsFileNameRoute,
  getBankTransactionsBankTransactionIDAttachmentsRoute,
  getBankTransactionsBankTransactionIDHistoryRoute,
  getBankTransactionsBankTransactionIDRoute,
  getBankTransactionsRoute,
  postBankTransactionsBankTransactionIDAttachmentsFileNameRoute,
  postBankTransactionsBankTransactionIDRoute,
  postBankTransactionsRoute,
  putBankTransactionsBankTransactionIDAttachmentsFileNameRoute,
  putBankTransactionsBankTransactionIDHistoryRoute,
  putBankTransactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bankTransactionsHandler = app
  .openapi(getBankTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBankTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankTransactionsBankTransactionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransactionsBankTransactionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankTransactionsBankTransactionIDAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankTransactionsBankTransactionIDAttachmentsAttachmentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankTransactionsBankTransactionIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankTransactionsBankTransactionIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBankTransactionsBankTransactionIDAttachmentsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankTransactionsBankTransactionIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBankTransactionsBankTransactionIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
