import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeNetworkInsightsAccessScopeAnalysesRoute,
  postActionDescribeNetworkInsightsAccessScopeAnalysesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeNetworkInsightsAccessScopeAnalysesHandler = app
  .openapi(getActionDescribeNetworkInsightsAccessScopeAnalysesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeNetworkInsightsAccessScopeAnalysesRoute, (c) => {
    throw new Error('Not implemented')
  })
