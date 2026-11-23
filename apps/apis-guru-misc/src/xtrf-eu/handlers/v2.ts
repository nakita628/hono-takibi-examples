import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2ProjectsProjectIdFinancePayablesPayableIdRoute,
  deleteV2ProjectsProjectIdFinanceReceivablesReceivableIdRoute,
  deleteV2QuotesQuoteIdFinancePayablesPayableIdRoute,
  deleteV2QuotesQuoteIdFinanceReceivablesReceivableIdRoute,
  getV2JobsForExternalIdRoute,
  getV2JobsJobIdFilesDeliveredRoute,
  getV2JobsJobIdFilesSharedReferenceFilesRoute,
  getV2JobsJobIdFilesSharedWorkFilesRoute,
  getV2JobsJobIdRoute,
  getV2ProjectsFilesFileIdDownloadFileNameRoute,
  getV2ProjectsFilesFileIdRoute,
  getV2ProjectsForExternalIdExternalProjectIdRoute,
  getV2ProjectsProjectIdCatToolProjectRoute,
  getV2ProjectsProjectIdClientContactsRoute,
  getV2ProjectsProjectIdCustomFieldsRoute,
  getV2ProjectsProjectIdFilesDeliverableRoute,
  getV2ProjectsProjectIdFilesRoute,
  getV2ProjectsProjectIdFinanceRoute,
  getV2ProjectsProjectIdJobsRoute,
  getV2ProjectsProjectIdProcessRoute,
  getV2ProjectsProjectIdRoute,
  getV2QuotesFilesFileIdDownloadFileNameRoute,
  getV2QuotesFilesFileIdRoute,
  getV2QuotesQuoteIdClientContactsRoute,
  getV2QuotesQuoteIdCustomFieldsRoute,
  getV2QuotesQuoteIdFilesRoute,
  getV2QuotesQuoteIdFinanceRoute,
  getV2QuotesQuoteIdJobsRoute,
  getV2QuotesQuoteIdRoute,
  postV2JobsJobIdFilesAddExternalLinkRoute,
  postV2JobsJobIdFilesDeliveredAddLinkRoute,
  postV2JobsJobIdFilesDeliveredUploadRoute,
  postV2ProjectsFilesArchiveRoute,
  postV2ProjectsProjectIdAddJobRoute,
  postV2ProjectsProjectIdFilesAddExternalLinkRoute,
  postV2ProjectsProjectIdFilesAddLinkRoute,
  postV2ProjectsProjectIdFilesUploadRoute,
  postV2ProjectsProjectIdFinancePayablesRoute,
  postV2ProjectsProjectIdFinanceReceivablesRoute,
  postV2ProjectsRoute,
  postV2QuotesFilesArchiveRoute,
  postV2QuotesQuoteIdFilesUploadRoute,
  postV2QuotesQuoteIdFinancePayablesRoute,
  postV2QuotesQuoteIdFinanceReceivablesRoute,
  postV2QuotesRoute,
  putV2JobsJobIdDatesRoute,
  putV2JobsJobIdFilesDeliveredAddRoute,
  putV2JobsJobIdFilesSharedReferenceFilesShareRoute,
  putV2JobsJobIdFilesSharedWorkFilesShareRoute,
  putV2JobsJobIdFilesStopSharingRoute,
  putV2JobsJobIdInstructionsRoute,
  putV2JobsJobIdStatusRoute,
  putV2JobsJobIdVendorRoute,
  putV2ProjectsProjectIdClientContactsRoute,
  putV2ProjectsProjectIdClientDeadlineRoute,
  putV2ProjectsProjectIdClientNotesRoute,
  putV2ProjectsProjectIdClientReferenceNumberRoute,
  putV2ProjectsProjectIdCustomFieldsKeyRoute,
  putV2ProjectsProjectIdFilesAddRoute,
  putV2ProjectsProjectIdFinancePayablesPayableIdRoute,
  putV2ProjectsProjectIdFinanceReceivablesReceivableIdRoute,
  putV2ProjectsProjectIdInternalNotesRoute,
  putV2ProjectsProjectIdOrderDateRoute,
  putV2ProjectsProjectIdSourceLanguageRoute,
  putV2ProjectsProjectIdSpecializationRoute,
  putV2ProjectsProjectIdStatusRoute,
  putV2ProjectsProjectIdTargetLanguagesRoute,
  putV2ProjectsProjectIdVendorInstructionsRoute,
  putV2ProjectsProjectIdVolumeRoute,
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

export const v2Handler = app
  .openapi(getV2JobsForExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2JobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2JobsJobIdDatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2JobsJobIdFilesAddExternalLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2JobsJobIdFilesDeliveredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2JobsJobIdFilesDeliveredAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2JobsJobIdFilesDeliveredAddLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2JobsJobIdFilesDeliveredUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2JobsJobIdFilesSharedReferenceFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2JobsJobIdFilesSharedReferenceFilesShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2JobsJobIdFilesSharedWorkFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2JobsJobIdFilesSharedWorkFilesShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2JobsJobIdFilesStopSharingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2JobsJobIdInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2JobsJobIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2JobsJobIdVendorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ProjectsFilesArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsFilesFileIdDownloadFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsForExternalIdExternalProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ProjectsProjectIdAddJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsProjectIdCatToolProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsProjectIdClientContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ProjectsProjectIdClientContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ProjectsProjectIdClientDeadlineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ProjectsProjectIdClientNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ProjectsProjectIdClientReferenceNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsProjectIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ProjectsProjectIdCustomFieldsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsProjectIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ProjectsProjectIdFilesAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ProjectsProjectIdFilesAddExternalLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ProjectsProjectIdFilesAddLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsProjectIdFilesDeliverableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ProjectsProjectIdFilesUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsProjectIdFinanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ProjectsProjectIdFinancePayablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ProjectsProjectIdFinancePayablesPayableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ProjectsProjectIdFinancePayablesPayableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ProjectsProjectIdFinanceReceivablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ProjectsProjectIdFinanceReceivablesReceivableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ProjectsProjectIdFinanceReceivablesReceivableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ProjectsProjectIdInternalNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsProjectIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ProjectsProjectIdOrderDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsProjectIdProcessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ProjectsProjectIdSourceLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ProjectsProjectIdSpecializationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ProjectsProjectIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ProjectsProjectIdTargetLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ProjectsProjectIdVendorInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ProjectsProjectIdVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
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
