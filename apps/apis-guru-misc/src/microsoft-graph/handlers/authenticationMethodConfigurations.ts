import { OpenAPIHono } from '@hono/zod-openapi'
import { getAuthenticationMethodConfigurationsCountRoute } from '../routes'

const app = new OpenAPIHono()

export const authenticationMethodConfigurationsHandler = app.openapi(
  getAuthenticationMethodConfigurationsCountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
