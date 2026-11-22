import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1InvoicesRoute, postV1InvoicesIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const invoicesHandler = app
  .openapi(getV1InvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
