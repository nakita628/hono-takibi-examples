import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1B2bOauthAuthenticateRoute,
  postV1B2bOauthDiscoveryAuthenticateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const b2BOauthHandler = app
  .openapi(postV1B2bOauthAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOauthDiscoveryAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
