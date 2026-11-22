import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1OauthAuthorizeProjectClaimRoute,
  getV1OauthAuthorizeRoute,
  postV1OauthRevokeRoute,
  postV1OauthTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuthHandler = app
  .openapi(getV1OauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OauthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OauthRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OauthAuthorizeProjectClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
