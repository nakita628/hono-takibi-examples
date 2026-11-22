import { OpenAPIHono } from '@hono/zod-openapi'
import {
  putForgotPasswordRoute,
  putForgotPasswordVerifyRoute,
  putForgotUsernameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const forgotAccountHandler = app
  .openapi(putForgotPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putForgotPasswordVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putForgotUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
