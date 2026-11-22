import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListIdentityPoliciesRoute, postActionListIdentityPoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListIdentityPoliciesHandler = app
  .openapi(getActionListIdentityPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListIdentityPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
