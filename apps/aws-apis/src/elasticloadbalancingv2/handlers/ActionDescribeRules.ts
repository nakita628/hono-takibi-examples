import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeRulesRoute, postActionDescribeRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeRulesHandler = app
  .openapi(getActionDescribeRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
