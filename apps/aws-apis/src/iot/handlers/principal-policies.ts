import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePrincipalPoliciesPolicyNameXAmznIotPrincipalRoute,
  putPrincipalPoliciesPolicyNameXAmznIotPrincipalRoute,
} from '../routes'

const app = new OpenAPIHono()

export const principalPoliciesHandler = app
  .openapi(putPrincipalPoliciesPolicyNameXAmznIotPrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrincipalPoliciesPolicyNameXAmznIotPrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
