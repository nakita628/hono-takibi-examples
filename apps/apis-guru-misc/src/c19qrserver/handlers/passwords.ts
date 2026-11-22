import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postChangePasswordRoute,
  postRequestPasswordResetRoute,
  postVerifyPasswordChangeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const passwordsHandler = app
  .openapi(postChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRequestPasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVerifyPasswordChangeRoute, (c) => {
    throw new Error('Not implemented')
  })
