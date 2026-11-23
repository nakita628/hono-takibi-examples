import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOauthAuthorizeRoute,
  postOauthDeviceCodeRoute,
  postOauthDeviceTokenRoute,
  postOauthRevokeRoute,
  postOauthTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oauthHandler = app
  .openapi(getOauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthDeviceCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthDeviceTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
