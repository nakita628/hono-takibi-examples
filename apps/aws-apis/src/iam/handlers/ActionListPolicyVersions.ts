import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListPolicyVersionsRoute, postActionListPolicyVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListPolicyVersionsHandler = app
  .openapi(getActionListPolicyVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListPolicyVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
