import { OpenAPIHono } from '@hono/zod-openapi'
import { postOtpRoute } from '../routes'

const app = new OpenAPIHono()

export const otpHandler = app.openapi(postOtpRoute, (c) => {
  throw new Error('Not implemented')
})
