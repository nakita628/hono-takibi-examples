import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppsAccessTokensDeAuthenticateRoute } from '../routes'

const app = new OpenAPIHono()

export const appsHandler = app.openapi(getAppsAccessTokensDeAuthenticateRoute, (c) => {
  throw new Error('Not implemented')
})
