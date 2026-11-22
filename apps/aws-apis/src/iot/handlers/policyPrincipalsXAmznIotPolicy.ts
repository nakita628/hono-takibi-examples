import { OpenAPIHono } from '@hono/zod-openapi'
import { getPolicyPrincipalsXAmznIotPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const policyPrincipalsXAmznIotPolicyHandler = app.openapi(
  getPolicyPrincipalsXAmznIotPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
