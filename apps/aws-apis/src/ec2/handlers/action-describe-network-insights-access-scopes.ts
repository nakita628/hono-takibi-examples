import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeNetworkInsightsAccessScopesRoute,
  postActionDescribeNetworkInsightsAccessScopesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeNetworkInsightsAccessScopesHandler = app
  .openapi(getActionDescribeNetworkInsightsAccessScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeNetworkInsightsAccessScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
