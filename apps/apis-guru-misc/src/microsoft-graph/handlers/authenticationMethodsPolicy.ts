import { OpenAPIHono } from '@hono/zod-openapi'
import { getAuthenticationMethodsPolicyAuthenticationMethodConfigurationsCountRoute } from '../routes'

const app = new OpenAPIHono()

export const authenticationMethodsPolicyHandler = app.openapi(
  getAuthenticationMethodsPolicyAuthenticationMethodConfigurationsCountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
