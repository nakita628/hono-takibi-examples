import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1InvoicesIdCommentsRoute } from '../routes'

const app = new OpenAPIHono()

export const invoicesIdCommentsHandler = app.openapi(getV1InvoicesIdCommentsRoute, (c) => {
  throw new Error('Not implemented')
})
