import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePrintPrintersPrinterIdRoute,
  deletePrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdRoute,
  getPrintPrintersPrinterIdConnectorsPrintConnectorIdRoute,
  getPrintPrintersPrinterIdConnectorsRoute,
  getPrintPrintersPrinterIdRoute,
  getPrintPrintersPrinterIdSharesPrinterShareIdRoute,
  getPrintPrintersPrinterIdSharesRoute,
  getPrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdDefinitionRoute,
  getPrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdRoute,
  getPrintPrintersPrinterIdTaskTriggersRoute,
  getPrintPrintersRoute,
  patchPrintPrintersPrinterIdRoute,
  patchPrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdRoute,
  postPrintPrintersPrinterIdTaskTriggersRoute,
  postPrintPrintersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const printPrinterHandler = app
  .openapi(getPrintPrintersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintPrintersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintPrintersPrinterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrintPrintersPrinterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdConnectorsPrintConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdSharesPrinterShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdTaskTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintPrintersPrinterIdTaskTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
