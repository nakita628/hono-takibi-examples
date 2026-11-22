import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWellKnownOauthAuthorizationServerRoute,
  getWellKnownOauthProtectedResourceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuthDiscoveryHandler = app
  .openapi(getWellKnownOauthAuthorizationServerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWellKnownOauthProtectedResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
