import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeNetworkInsightsAnalysesRoute,
  postActionDescribeNetworkInsightsAnalysesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeNetworkInsightsAnalysesHandler = app
  .openapi(getActionDescribeNetworkInsightsAnalysesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeNetworkInsightsAnalysesRoute, (c) => {
    throw new Error('Not implemented')
  })
