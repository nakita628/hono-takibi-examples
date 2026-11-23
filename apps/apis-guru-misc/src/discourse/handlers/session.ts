import { OpenAPIHono } from '@hono/zod-openapi'
import { postSessionForgotPasswordJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const sessionHandler = app.openapi(postSessionForgotPasswordJsonRoute, (c) => {
  throw new Error('Not implemented')
})
