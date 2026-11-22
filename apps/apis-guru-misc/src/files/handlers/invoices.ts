import { OpenAPIHono } from '@hono/zod-openapi'
import { getInvoicesIdRoute, getInvoicesRoute } from '../routes'

const app = new OpenAPIHono()

export const invoicesHandler = app
  .openapi(getInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
