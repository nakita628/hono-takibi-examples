import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOauthAuthorizeContextRoute,
  getOauthAuthorizeRoute,
  postOauthAuthorizeRoute,
  postOauthRegisterRoute,
  postOauthRevokeRoute,
  postOauthTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oauthHandler = app
  .openapi(getOauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthAuthorizeContextRoute, (c) => {
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
