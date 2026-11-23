import { OpenAPIHono } from '@hono/zod-openapi'
import { getPrincipalPoliciesXAmznIotPrincipalRoute } from '../routes'

const app = new OpenAPIHono()

export const principalPoliciesXAmznIotPrincipalHandler = app.openapi(
  getPrincipalPoliciesXAmznIotPrincipalRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
