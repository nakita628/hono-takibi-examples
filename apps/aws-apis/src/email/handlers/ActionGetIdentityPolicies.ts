import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetIdentityPoliciesRoute, postActionGetIdentityPoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetIdentityPoliciesHandler = app
  .openapi(getActionGetIdentityPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetIdentityPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
