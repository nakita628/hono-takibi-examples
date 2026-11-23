import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOauthAuthorizationsAuthorizationIdRoute,
  getOauthAuthorizeRoute,
  postOauthAuthorizationsAuthorizationIdConsentRoute,
  postOauthClientsRegisterRoute,
  postOauthTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oauthHandler = app
  .openapi(postOauthClientsRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthAuthorizationsAuthorizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthAuthorizationsAuthorizationIdConsentRoute, (c) => {
    throw new Error('Not implemented')
  })
