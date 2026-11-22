import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAuthOauthProviderRoute,
  getAuthOauthRoute,
  postAuthLoginRoute,
  postAuthLogoutRoute,
  postAuthPasswordRequestRoute,
  postAuthPasswordResetRoute,
  postAuthRefreshRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(postAuthLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthPasswordRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthPasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthOauthProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
