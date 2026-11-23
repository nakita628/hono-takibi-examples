import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteEmailsIdRoute, getEmailsIdRoute, postEmailsRoute, putEmailsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const emailsHandler = app
  .openapi(postEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
