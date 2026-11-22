import { OpenAPIHono } from '@hono/zod-openapi'
import { getInvoicesIdRoute, getOrganizationsIdInvoicesRoute } from '../routes'

const app = new OpenAPIHono()

export const invoicesHandler = app
  .openapi(getInvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
