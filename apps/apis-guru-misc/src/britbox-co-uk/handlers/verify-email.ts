import { OpenAPIHono } from '@hono/zod-openapi'
import { postVerifyEmailRoute } from '../routes'

const app = new OpenAPIHono()

export const verifyEmailHandler = app.openapi(postVerifyEmailRoute, (c) => {
  throw new Error('Not implemented')
})
