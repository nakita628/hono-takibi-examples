import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiInvoicesIdRoute,
  getApiInvoicesRoute,
  patchApiInvoicesIdRoute,
  postApiInvoicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoiceHandler = app
  .openapi(getApiInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
