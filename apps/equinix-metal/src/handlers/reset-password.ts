import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteResetPasswordRoute, postResetPasswordRoute } from '../routes'

const app = new OpenAPIHono()

export const resetPasswordHandler = app
  .openapi(deleteResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
