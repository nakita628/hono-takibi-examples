import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1MailerRoute, postApiV1MailerUnsubscribeRoute } from '../routes'

const app = new OpenAPIHono()

export const mailerHandler = app
  .openapi(postApiV1MailerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MailerUnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
