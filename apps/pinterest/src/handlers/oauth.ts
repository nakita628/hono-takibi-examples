import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postOauthConversionTokenRoute,
  postOauthTokenRevokeRoute,
  postOauthTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oauthHandler = app
  .openapi(postOauthConversionTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthTokenRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
