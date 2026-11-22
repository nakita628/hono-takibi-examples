import { OpenAPIHono } from '@hono/zod-openapi'
import { getApi1InvoicesIdRoute, getApi1InvoicesRoute } from '../routes'

const app = new OpenAPIHono()

export const invoicesHandler = app
  .openapi(getApi1InvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1InvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
