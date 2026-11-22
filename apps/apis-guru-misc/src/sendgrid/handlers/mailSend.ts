import { OpenAPIHono } from '@hono/zod-openapi'
import { postMailSendRoute } from '../routes'

const app = new OpenAPIHono()

export const mailSendHandler = app.openapi(postMailSendRoute, (c) => {
  throw new Error('Not implemented')
})
