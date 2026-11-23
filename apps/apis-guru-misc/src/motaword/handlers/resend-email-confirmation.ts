import { OpenAPIHono } from '@hono/zod-openapi'
import { postResendEmailConfirmationRoute } from '../routes'

const app = new OpenAPIHono()

export const resendEmailConfirmationHandler = app.openapi(postResendEmailConfirmationRoute, (c) => {
  throw new Error('Not implemented')
})
