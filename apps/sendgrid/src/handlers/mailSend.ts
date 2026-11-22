import { OpenAPIHono } from '@hono/zod-openapi'
import { postV3MailSendRoute } from '../routes'

const app = new OpenAPIHono()

export const mailSendHandler = app.openapi(postV3MailSendRoute, (c) => {
  throw new Error('Not implemented')
})
