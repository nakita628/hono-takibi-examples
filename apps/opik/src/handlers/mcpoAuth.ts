import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOauthAuthorizeContextRoute,
  getOauthAuthorizeRoute,
  getWellKnownOauthAuthorizationServerRoute,
  postOauthAuthorizeRoute,
  postOauthRegisterRoute,
  postOauthRevokeRoute,
  postOauthTokenRoute,
  postOpikAuthOauthRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mcpoAuthHandler = app
  .openapi(getOauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthAuthorizeContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWellKnownOauthAuthorizationServerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpikAuthOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
