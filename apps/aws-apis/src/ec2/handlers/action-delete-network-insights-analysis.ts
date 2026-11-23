import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteNetworkInsightsAnalysisRoute,
  postActionDeleteNetworkInsightsAnalysisRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteNetworkInsightsAnalysisHandler = app
  .openapi(getActionDeleteNetworkInsightsAnalysisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteNetworkInsightsAnalysisRoute, (c) => {
    throw new Error('Not implemented')
  })
