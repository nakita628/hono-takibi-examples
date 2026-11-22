import { OpenAPIHono } from '@hono/zod-openapi'
import { postResendPhoneNumberAuthRoute } from '../routes'

const app = new OpenAPIHono()

export const resendPhoneNumberAuthHandler = app.openapi(postResendPhoneNumberAuthRoute, (c) => {
  throw new Error('Not implemented')
})
