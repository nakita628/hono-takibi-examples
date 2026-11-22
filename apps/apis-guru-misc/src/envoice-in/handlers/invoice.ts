import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiInvoiceAllcategoriesRoute,
  getApiInvoiceAllRoute,
  getApiInvoiceDetailsRoute,
  getApiInvoicePdfRoute,
  getApiInvoiceStatusRoute,
  getApiInvoiceUriRoute,
  postApiInvoiceChangestatusRoute,
  postApiInvoiceDeletecategoryRoute,
  postApiInvoiceDeleteRoute,
  postApiInvoiceNewcategoryRoute,
  postApiInvoiceNewRoute,
  postApiInvoiceSendtoaccountantRoute,
  postApiInvoiceSendtoclientRoute,
  postApiInvoiceUpdatecategoryRoute,
  postApiInvoiceUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoiceHandler = app
  .openapi(getApiInvoiceAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInvoiceAllcategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvoiceChangestatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvoiceDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvoiceDeletecategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInvoiceDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvoiceNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvoiceNewcategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInvoicePdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvoiceSendtoaccountantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvoiceSendtoclientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInvoiceStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvoiceUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvoiceUpdatecategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInvoiceUriRoute, (c) => {
    throw new Error('Not implemented')
  })
