import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLoginSsoRoute,
  getLogoutRoute,
  postLoginRoute,
  postResetPasswordRequestRoute,
  postResetPasswordRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(getLoginSsoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResetPasswordRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
