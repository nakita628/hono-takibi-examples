import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListGroupPoliciesRoute, postActionListGroupPoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListGroupPoliciesHandler = app
  .openapi(getActionListGroupPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListGroupPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
