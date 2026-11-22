import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePrintOperationsPrintOperationIdRoute,
  getPrintOperationsPrintOperationIdRoute,
  getPrintOperationsRoute,
  patchPrintOperationsPrintOperationIdRoute,
  postPrintOperationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const printPrintOperationHandler = app
  .openapi(getPrintOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintOperationsPrintOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintOperationsPrintOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrintOperationsPrintOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
