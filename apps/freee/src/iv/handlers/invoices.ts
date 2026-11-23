import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInvoicesIdRoute,
  getInvoicesRoute,
  getInvoicesTemplatesRoute,
  postInvoicesRoute,
  putInvoicesIdCancelRoute,
  putInvoicesIdRoute,
  putInvoicesIdUncancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoicesHandler = app
  .openapi(getInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInvoicesIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInvoicesIdUncancelRoute, (c) => {
    throw new Error('Not implemented')
  })
