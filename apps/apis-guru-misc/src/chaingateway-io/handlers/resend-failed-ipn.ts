import { OpenAPIHono } from '@hono/zod-openapi'
import { postResendFailedIPNRoute } from '../routes'

const app = new OpenAPIHono()

export const resendFailedIpnHandler = app.openapi(postResendFailedIPNRoute, (c) => {
  throw new Error('Not implemented')
})
