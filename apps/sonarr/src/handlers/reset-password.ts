import { OpenAPIHono } from '@hono/zod-openapi'
import { postResetPasswordRequestRoute, postResetPasswordRoute } from '../routes'

const app = new OpenAPIHono()

export const resetPasswordHandler = app
  .openapi(postResetPasswordRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
