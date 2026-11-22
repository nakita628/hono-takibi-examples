import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectProjectCreditsRoute,
  getProjectProjectInvoiceInvoiceNumberDownloadCookieRoute,
  getProjectProjectInvoiceRoute,
  postProjectProjectCreditsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectBillingHandler = app
  .openapi(postProjectProjectCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectInvoiceInvoiceNumberDownloadCookieRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
