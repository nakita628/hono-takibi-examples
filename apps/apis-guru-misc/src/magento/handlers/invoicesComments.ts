import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1InvoicesCommentsRoute } from '../routes'

const app = new OpenAPIHono()

export const invoicesCommentsHandler = app.openapi(postV1InvoicesCommentsRoute, (c) => {
  throw new Error('Not implemented')
})
