import { OpenAPIHono } from '@hono/zod-openapi'
import { postLogoutXAmzSsoBearerTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const logoutXAmzSsoBearerTokenHandler = app.openapi(
  postLogoutXAmzSsoBearerTokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
