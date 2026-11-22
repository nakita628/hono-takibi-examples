import { OpenAPIHono } from '@hono/zod-openapi'
import { getEinvoicesEinvoiceIdRoute, getEinvoicesRoute } from '../routes'

const app = new OpenAPIHono()

export const einvoicesHandler = app
  .openapi(getEinvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEinvoicesEinvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
