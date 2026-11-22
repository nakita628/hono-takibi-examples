import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdRoute,
  deletePrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdValueRoute,
  deletePrintPrintersPrinterIdJobsPrintJobIdRoute,
  deletePrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdRoute,
  deletePrintPrintersPrinterIdRoute,
  deletePrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdRoute,
  getPrintPrintersCountRoute,
  getPrintPrintersPrinterIdConnectorsCountRoute,
  getPrintPrintersPrinterIdConnectorsPrintConnectorIdRoute,
  getPrintPrintersPrinterIdConnectorsRoute,
  getPrintPrintersPrinterIdJobsCountRoute,
  getPrintPrintersPrinterIdJobsPrintJobIdDocumentsCountRoute,
  getPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdRoute,
  getPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdValueRoute,
  getPrintPrintersPrinterIdJobsPrintJobIdDocumentsRoute,
  getPrintPrintersPrinterIdJobsPrintJobIdRoute,
  getPrintPrintersPrinterIdJobsPrintJobIdTasksCountRoute,
  getPrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdDefinitionRoute,
  getPrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdRoute,
  getPrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdTriggerRoute,
  getPrintPrintersPrinterIdJobsPrintJobIdTasksRoute,
  getPrintPrintersPrinterIdJobsRoute,
  getPrintPrintersPrinterIdRoute,
  getPrintPrintersPrinterIdSharesCountRoute,
  getPrintPrintersPrinterIdSharesPrinterShareIdRoute,
  getPrintPrintersPrinterIdSharesRoute,
  getPrintPrintersPrinterIdTaskTriggersCountRoute,
  getPrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdDefinitionRoute,
  getPrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdRoute,
  getPrintPrintersPrinterIdTaskTriggersRoute,
  getPrintPrintersRoute,
  patchPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdRoute,
  patchPrintPrintersPrinterIdJobsPrintJobIdRoute,
  patchPrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdRoute,
  patchPrintPrintersPrinterIdRoute,
  patchPrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdRoute,
  postPrintPrintersCreateRoute,
  postPrintPrintersPrinterIdJobsPrintJobIdAbortRoute,
  postPrintPrintersPrinterIdJobsPrintJobIdCancelRoute,
  postPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdCreateUploadSessionRoute,
  postPrintPrintersPrinterIdJobsPrintJobIdDocumentsRoute,
  postPrintPrintersPrinterIdJobsPrintJobIdRedirectRoute,
  postPrintPrintersPrinterIdJobsPrintJobIdStartRoute,
  postPrintPrintersPrinterIdJobsPrintJobIdTasksRoute,
  postPrintPrintersPrinterIdJobsRoute,
  postPrintPrintersPrinterIdRestoreFactoryDefaultsRoute,
  postPrintPrintersPrinterIdTaskTriggersRoute,
  postPrintPrintersRoute,
  putPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const printPrinterHandler = app
  .openapi(getPrintPrintersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintPrintersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrintPrintersPrinterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintPrintersPrinterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdConnectorsPrintConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdConnectorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintPrintersPrinterIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdJobsPrintJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrintPrintersPrinterIdJobsPrintJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintPrintersPrinterIdJobsPrintJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdJobsPrintJobIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintPrintersPrinterIdJobsPrintJobIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdCreateUploadSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPrintPrintersPrinterIdJobsPrintJobIdDocumentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintPrintersPrinterIdJobsPrintJobIdAbortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintPrintersPrinterIdJobsPrintJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintPrintersPrinterIdJobsPrintJobIdRedirectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintPrintersPrinterIdJobsPrintJobIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdJobsPrintJobIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintPrintersPrinterIdJobsPrintJobIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdTriggerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdJobsPrintJobIdTasksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdJobsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintPrintersPrinterIdRestoreFactoryDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdSharesPrinterShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdSharesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdTaskTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintPrintersPrinterIdTaskTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdTaskTriggersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintPrintersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
