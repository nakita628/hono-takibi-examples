import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminDirectoryV1NameRoute,
  getAdminDirectoryV1CustomersCustomerKeyRoute,
  getAdminDirectoryV1NameRoute,
  getAdminDirectoryV1ParentChromePrintersListPrinterModelsRoute,
  getAdminDirectoryV1ParentChromePrintersRoute,
  getAdminDirectoryV1ParentChromePrintServersRoute,
  patchAdminDirectoryV1CustomersCustomerKeyRoute,
  patchAdminDirectoryV1NameRoute,
  postAdminDirectoryV1ParentChromePrintersBatchCreatePrintersRoute,
  postAdminDirectoryV1ParentChromePrintersBatchDeletePrintersRoute,
  postAdminDirectoryV1ParentChromePrintersRoute,
  postAdminDirectoryV1ParentChromePrintServersBatchCreatePrintServersRoute,
  postAdminDirectoryV1ParentChromePrintServersBatchDeletePrintServersRoute,
  postAdminDirectoryV1ParentChromePrintServersRoute,
  putAdminDirectoryV1CustomersCustomerKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(getAdminDirectoryV1CustomersCustomerKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1CustomersCustomerKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminDirectoryV1CustomersCustomerKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1ParentChromePrintServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1ParentChromePrintServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1ParentChromePrintServersBatchCreatePrintServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1ParentChromePrintServersBatchDeletePrintServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1ParentChromePrintersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1ParentChromePrintersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1ParentChromePrintersBatchCreatePrintersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1ParentChromePrintersBatchDeletePrintersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1ParentChromePrintersListPrinterModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
