import { OpenAPIHono } from '@hono/zod-openapi'
import { getWellKnownOauthAuthorizationServerRoute } from '../routes'

const app = new OpenAPIHono()

export const wellKnownHandler = app.openapi(getWellKnownOauthAuthorizationServerRoute, (c) => {
  throw new Error('Not implemented')
})
