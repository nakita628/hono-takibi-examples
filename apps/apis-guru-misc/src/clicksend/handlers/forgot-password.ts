import { OpenAPIHono } from '@hono/zod-openapi'
import { putForgotPasswordRoute, putForgotPasswordVerifyRoute } from '../routes'

const app = new OpenAPIHono()

export const forgotPasswordHandler = app
  .openapi(putForgotPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putForgotPasswordVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
