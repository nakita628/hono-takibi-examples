import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeNetworkInsightsPathsRoute,
  postActionDescribeNetworkInsightsPathsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeNetworkInsightsPathsHandler = app
  .openapi(getActionDescribeNetworkInsightsPathsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeNetworkInsightsPathsRoute, (c) => {
    throw new Error('Not implemented')
  })
