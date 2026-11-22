import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOauthAuthorizeRoute,
  getOauthConsentConsentTokenRoute,
  getOauthJwksRoute,
  postOauthGrantsRoute,
  postOauthIntrospectRoute,
  postOauthRegisterRoute,
  postOauthTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuthProtocolHandler = app
  .openapi(getOauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthConsentConsentTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthIntrospectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthJwksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
