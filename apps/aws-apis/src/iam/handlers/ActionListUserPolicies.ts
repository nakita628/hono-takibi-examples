import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListUserPoliciesRoute, postActionListUserPoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListUserPoliciesHandler = app
  .openapi(getActionListUserPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListUserPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
