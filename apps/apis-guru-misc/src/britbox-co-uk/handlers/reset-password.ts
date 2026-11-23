import { OpenAPIHono } from '@hono/zod-openapi'
import { postResetPasswordRoute } from '../routes'

const app = new OpenAPIHono()

export const resetPasswordHandler = app.openapi(postResetPasswordRoute, (c) => {
  throw new Error('Not implemented')
})
