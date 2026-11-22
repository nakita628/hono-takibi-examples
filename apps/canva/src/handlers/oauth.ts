import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1OauthIntrospectRoute,
  postV1OauthRevokeRoute,
  postV1OauthTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oauthHandler = app
  .openapi(postV1OauthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OauthIntrospectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OauthRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
