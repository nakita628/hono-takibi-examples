import { OpenAPIHono } from '@hono/zod-openapi'
import { putForgotUsernameRoute } from '../routes'

const app = new OpenAPIHono()

export const forgotUsernameHandler = app.openapi(putForgotUsernameRoute, (c) => {
  throw new Error('Not implemented')
})
