import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListRolePoliciesRoute, postActionListRolePoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionListRolePoliciesHandler = app
  .openapi(getActionListRolePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListRolePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
