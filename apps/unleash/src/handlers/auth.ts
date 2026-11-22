import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAdminPermissionsRoute,
  getAuthResetValidateRoute,
  postAuthResetPasswordEmailRoute,
  postAuthResetPasswordRoute,
  postAuthResetValidatePasswordRoute,
  postAuthSimpleLoginRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(getApiAdminPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
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
