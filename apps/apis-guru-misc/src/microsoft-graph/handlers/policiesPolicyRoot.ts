import { OpenAPIHono } from '@hono/zod-openapi'
import { getPoliciesRoute, patchPoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const policiesPolicyRootHandler = app
  .openapi(getPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
