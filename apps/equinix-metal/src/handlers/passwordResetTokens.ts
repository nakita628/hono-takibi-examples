import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteResetPasswordRoute, postResetPasswordRoute } from '../routes'

const app = new OpenAPIHono()

export const passwordResetTokensHandler = app
  .openapi(deleteResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
