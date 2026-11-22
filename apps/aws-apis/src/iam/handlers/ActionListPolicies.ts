import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListPoliciesRoute, postActionListPoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListPoliciesHandler = app
  .openapi(getActionListPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
