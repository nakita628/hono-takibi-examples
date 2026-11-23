import { OpenAPIHono } from '@hono/zod-openapi'
import { postResendRoute } from '../routes'

const app = new OpenAPIHono()

export const resendHandler = app.openapi(postResendRoute, (c) => {
  throw new Error('Not implemented')
})
