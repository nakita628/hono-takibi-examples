import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2QuotesQuoteIdFinancePayablesPayableIdRoute,
  deleteV2QuotesQuoteIdFinanceReceivablesReceivableIdRoute,
  getV2QuotesFilesFileIdDownloadFileNameRoute,
  getV2QuotesFilesFileIdRoute,
  getV2QuotesQuoteIdClientContactsRoute,
  getV2QuotesQuoteIdCustomFieldsRoute,
  getV2QuotesQuoteIdFilesRoute,
  getV2QuotesQuoteIdFinanceRoute,
  getV2QuotesQuoteIdJobsRoute,
  getV2QuotesQuoteIdRoute,
  postV2QuotesFilesArchiveRoute,
  postV2QuotesQuoteIdFilesUploadRoute,
  postV2QuotesQuoteIdFinancePayablesRoute,
  postV2QuotesQuoteIdFinanceReceivablesRoute,
  postV2QuotesRoute,
  putV2QuotesQuoteIdBusinessDaysRoute,
  putV2QuotesQuoteIdClientContactsRoute,
  putV2QuotesQuoteIdClientNotesRoute,
  putV2QuotesQuoteIdClientReferenceNumberRoute,
  putV2QuotesQuoteIdCustomFieldsKeyRoute,
  putV2QuotesQuoteIdExpectedDeliveryDateRoute,
  putV2QuotesQuoteIdFilesAddRoute,
  putV2QuotesQuoteIdFinancePayablesPayableIdRoute,
  putV2QuotesQuoteIdFinanceReceivablesReceivableIdRoute,
  putV2QuotesQuoteIdInternalNotesRoute,
  putV2QuotesQuoteIdQuoteExpiryRoute,
  putV2QuotesQuoteIdSourceLanguageRoute,
  putV2QuotesQuoteIdSpecializationRoute,
  putV2QuotesQuoteIdStatusRoute,
  putV2QuotesQuoteIdTargetLanguagesRoute,
  putV2QuotesQuoteIdVendorInstructionsRoute,
  putV2QuotesQuoteIdVolumeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quotesSmartV2Handler = app
  .openapi(postV2QuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2QuotesFilesArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2QuotesFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2QuotesFilesFileIdDownloadFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2QuotesQuoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2QuotesQuoteIdBusinessDaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2QuotesQuoteIdClientContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2QuotesQuoteIdClientContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2QuotesQuoteIdClientNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2QuotesQuoteIdClientReferenceNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2QuotesQuoteIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2QuotesQuoteIdCustomFieldsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2QuotesQuoteIdExpectedDeliveryDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2QuotesQuoteIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2QuotesQuoteIdFilesAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2QuotesQuoteIdFilesUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2QuotesQuoteIdFinanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2QuotesQuoteIdFinancePayablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2QuotesQuoteIdFinancePayablesPayableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2QuotesQuoteIdFinancePayablesPayableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2QuotesQuoteIdFinanceReceivablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2QuotesQuoteIdFinanceReceivablesReceivableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2QuotesQuoteIdFinanceReceivablesReceivableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2QuotesQuoteIdInternalNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2QuotesQuoteIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2QuotesQuoteIdQuoteExpiryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2QuotesQuoteIdSourceLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2QuotesQuoteIdSpecializationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2QuotesQuoteIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2QuotesQuoteIdTargetLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2QuotesQuoteIdVendorInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2QuotesQuoteIdVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
