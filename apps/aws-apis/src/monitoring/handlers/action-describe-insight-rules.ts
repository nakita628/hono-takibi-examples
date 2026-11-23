import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeInsightRulesRoute, postActionDescribeInsightRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeInsightRulesHandler = app
  .openapi(getActionDescribeInsightRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeInsightRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
