import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOauthMobileRedirectRoute,
  postOauthAuthorizeRoute,
  postOauthBackchannelLogoutRoute,
  postOauthCallbackRoute,
  postOauthLinkRoute,
  postOauthUnlinkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oauthHandler = app
  .openapi(postOauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthBackchannelLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthMobileRedirectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthUnlinkRoute, (c) => {
    throw new Error('Not implemented')
  })
