import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCheckSubscriptionIdRoute,
  postRequestPasswordResetRoute,
  postResetPasswordRoute,
  postVerifyEmailRoute,
} from '../routes'

const app = new OpenAPIHono()

export const supportHandler = app
  .openapi(getCheckSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRequestPasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
