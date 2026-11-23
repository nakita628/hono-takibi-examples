import { OpenAPIHono } from '@hono/zod-openapi'
import { getEmailsRoute } from '../routes'

const app = new OpenAPIHono()

export const emailsHandler = app.openapi(getEmailsRoute, (c) => {
  throw new Error('Not implemented')
})
