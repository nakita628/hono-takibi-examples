import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postOauth202609TokenIntrospectRoute,
  postOauth202609TokenRevokeRoute,
  postOauth202609TokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oauthHandler = app
  .openapi(postOauth202609TokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth202609TokenIntrospectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth202609TokenRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
