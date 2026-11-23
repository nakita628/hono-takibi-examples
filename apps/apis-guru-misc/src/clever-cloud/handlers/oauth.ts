import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOauthAuthorizeRoute,
  getOauthRightsRoute,
  postOauthAccessTokenQueryRoute,
  postOauthAccessTokenRoute,
  postOauthAuthorizeRoute,
  postOauthRequestTokenQueryRoute,
  postOauthRequestTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oauthHandler = app
  .openapi(postOauthAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthAccessTokenQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthRequestTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthRequestTokenQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthRightsRoute, (c) => {
    throw new Error('Not implemented')
  })
