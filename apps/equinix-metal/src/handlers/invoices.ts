import { OpenAPIHono } from '@hono/zod-openapi'
import { getInvoicesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const invoicesHandler = app.openapi(getInvoicesIdRoute, (c) => {
  throw new Error('Not implemented')
})
