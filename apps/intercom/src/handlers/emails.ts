import { OpenAPIHono } from '@hono/zod-openapi'
import { getEmailsIdRoute, getEmailsRoute } from '../routes'

const app = new OpenAPIHono()

export const emailsHandler = app
  .openapi(getEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
