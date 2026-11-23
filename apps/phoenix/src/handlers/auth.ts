import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAuthLogoutRoute,
  postAuthLdapLoginRoute,
  postAuthLoginRoute,
  postAuthPasswordResetEmailRoute,
  postAuthPasswordResetRoute,
  postAuthRefreshRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(postAuthLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthPasswordResetEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthPasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthLdapLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
