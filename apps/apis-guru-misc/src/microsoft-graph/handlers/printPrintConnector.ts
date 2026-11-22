import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePrintConnectorsPrintConnectorIdRoute,
  getPrintConnectorsPrintConnectorIdRoute,
  getPrintConnectorsRoute,
  patchPrintConnectorsPrintConnectorIdRoute,
  postPrintConnectorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const printPrintConnectorHandler = app
  .openapi(getPrintConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintConnectorsPrintConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintConnectorsPrintConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrintConnectorsPrintConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
