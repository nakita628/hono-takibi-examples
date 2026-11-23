import { OpenAPIHono } from '@hono/zod-openapi'
import { getFederationCredentialsRoleNameAccountIdXAmzSsoBearerTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const federationHandler = app.openapi(
  getFederationCredentialsRoleNameAccountIdXAmzSsoBearerTokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
