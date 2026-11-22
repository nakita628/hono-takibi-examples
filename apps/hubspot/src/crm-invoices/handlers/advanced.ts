import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609InvoicesGdprDeleteRoute,
  postCrmObjects202609InvoicesMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609InvoicesGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609InvoicesMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
