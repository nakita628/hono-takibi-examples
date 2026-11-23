import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAuthIsPasswordLoginDisabledRoute,
  getAuthIsSmtpConfiguredRoute,
  getAuthLoginLinkTokenRoute,
  postAuthLoginRoute,
  postAuthLogoutRoute,
  postAuthRequestPasswordResetRoute,
  postAuthResetPasswordRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(postAuthLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthIsSmtpConfiguredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthIsPasswordLoginDisabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthRequestPasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthLoginLinkTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
