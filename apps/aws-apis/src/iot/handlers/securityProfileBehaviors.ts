import { OpenAPIHono } from '@hono/zod-openapi'
import { postSecurityProfileBehaviorsValidateRoute } from '../routes'

const app = new OpenAPIHono()

export const securityProfileBehaviorsHandler = app.openapi(
  postSecurityProfileBehaviorsValidateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
