import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAuthResetValidateRoute,
  postAuthResetPasswordEmailRoute,
  postAuthResetPasswordRoute,
  postAuthResetValidatePasswordRoute,
  postAuthSimpleLoginRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(postAuthSimpleLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthResetValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthResetValidatePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthResetPasswordEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
