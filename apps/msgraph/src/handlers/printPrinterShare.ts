import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePrintSharesPrinterShareIdAllowedGroupsGroupIdRefRoute,
  deletePrintSharesPrinterShareIdAllowedGroupsRefRoute,
  deletePrintSharesPrinterShareIdAllowedUsersRefRoute,
  deletePrintSharesPrinterShareIdAllowedUsersUserIdRefRoute,
  deletePrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdRoute,
  deletePrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdValueRoute,
  deletePrintSharesPrinterShareIdJobsPrintJobIdRoute,
  deletePrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdRoute,
  deletePrintSharesPrinterShareIdRoute,
  getPrintSharesCountRoute,
  getPrintSharesPrinterShareIdAllowedGroupsCountRoute,
  getPrintSharesPrinterShareIdAllowedGroupsGroupIdServiceProvisioningErrorsCountRoute,
  getPrintSharesPrinterShareIdAllowedGroupsGroupIdServiceProvisioningErrorsRoute,
  getPrintSharesPrinterShareIdAllowedGroupsRefRoute,
  getPrintSharesPrinterShareIdAllowedGroupsRoute,
  getPrintSharesPrinterShareIdAllowedUsersCountRoute,
  getPrintSharesPrinterShareIdAllowedUsersRefRoute,
  getPrintSharesPrinterShareIdAllowedUsersRoute,
  getPrintSharesPrinterShareIdAllowedUsersUserIdMailboxSettingsRoute,
  getPrintSharesPrinterShareIdAllowedUsersUserIdServiceProvisioningErrorsCountRoute,
  getPrintSharesPrinterShareIdAllowedUsersUserIdServiceProvisioningErrorsRoute,
  getPrintSharesPrinterShareIdJobsCountRoute,
  getPrintSharesPrinterShareIdJobsPrintJobIdDocumentsCountRoute,
  getPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdRoute,
  getPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdValueRoute,
  getPrintSharesPrinterShareIdJobsPrintJobIdDocumentsRoute,
  getPrintSharesPrinterShareIdJobsPrintJobIdRoute,
  getPrintSharesPrinterShareIdJobsPrintJobIdTasksCountRoute,
  getPrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdDefinitionRoute,
  getPrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdRoute,
  getPrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdTriggerRoute,
  getPrintSharesPrinterShareIdJobsPrintJobIdTasksRoute,
  getPrintSharesPrinterShareIdJobsRoute,
  getPrintSharesPrinterShareIdPrinterRoute,
  getPrintSharesPrinterShareIdRoute,
  getPrintSharesRoute,
  patchPrintSharesPrinterShareIdAllowedUsersUserIdMailboxSettingsRoute,
  patchPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdRoute,
  patchPrintSharesPrinterShareIdJobsPrintJobIdRoute,
  patchPrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdRoute,
  patchPrintSharesPrinterShareIdRoute,
  postPrintSharesPrinterShareIdAllowedGroupsRefRoute,
  postPrintSharesPrinterShareIdAllowedUsersRefRoute,
  postPrintSharesPrinterShareIdJobsPrintJobIdAbortRoute,
  postPrintSharesPrinterShareIdJobsPrintJobIdCancelRoute,
  postPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdCreateUploadSessionRoute,
  postPrintSharesPrinterShareIdJobsPrintJobIdDocumentsRoute,
  postPrintSharesPrinterShareIdJobsPrintJobIdRedirectRoute,
  postPrintSharesPrinterShareIdJobsPrintJobIdStartRoute,
  postPrintSharesPrinterShareIdJobsPrintJobIdTasksRoute,
  postPrintSharesPrinterShareIdJobsRoute,
  postPrintSharesRoute,
  putPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const printPrinterShareHandler = app
  .openapi(getPrintSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrintSharesPrinterShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintSharesPrinterShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdAllowedGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintSharesPrinterShareIdAllowedGroupsGroupIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdAllowedGroupsGroupIdServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getPrintSharesPrinterShareIdAllowedGroupsGroupIdServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPrintSharesPrinterShareIdAllowedGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdAllowedGroupsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintSharesPrinterShareIdAllowedGroupsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintSharesPrinterShareIdAllowedGroupsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdAllowedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintSharesPrinterShareIdAllowedUsersUserIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdAllowedUsersUserIdMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrintSharesPrinterShareIdAllowedUsersUserIdMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdAllowedUsersUserIdServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getPrintSharesPrinterShareIdAllowedUsersUserIdServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPrintSharesPrinterShareIdAllowedUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdAllowedUsersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintSharesPrinterShareIdAllowedUsersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintSharesPrinterShareIdAllowedUsersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintSharesPrinterShareIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdJobsPrintJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrintSharesPrinterShareIdJobsPrintJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintSharesPrinterShareIdJobsPrintJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdJobsPrintJobIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintSharesPrinterShareIdJobsPrintJobIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPrintSharesPrinterShareIdJobsPrintJobIdDocumentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintSharesPrinterShareIdJobsPrintJobIdAbortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintSharesPrinterShareIdJobsPrintJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintSharesPrinterShareIdJobsPrintJobIdRedirectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintSharesPrinterShareIdJobsPrintJobIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdJobsPrintJobIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintSharesPrinterShareIdJobsPrintJobIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdTriggerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdJobsPrintJobIdTasksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdJobsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesPrinterShareIdPrinterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintSharesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
