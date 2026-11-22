import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1InvoicesIdVoidRoute } from '../routes'

const app = new OpenAPIHono()

export const invoicesIdVoidHandler = app.openapi(postV1InvoicesIdVoidRoute, (c) => {
  throw new Error('Not implemented')
})
