import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1InvoicesIdEmailsRoute } from '../routes'

const app = new OpenAPIHono()

export const invoicesIdEmailsHandler = app.openapi(postV1InvoicesIdEmailsRoute, (c) => {
  throw new Error('Not implemented')
})
