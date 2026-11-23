import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionStartNetworkInsightsAnalysisRoute,
  postActionStartNetworkInsightsAnalysisRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionStartNetworkInsightsAnalysisHandler = app
  .openapi(getActionStartNetworkInsightsAnalysisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionStartNetworkInsightsAnalysisRoute, (c) => {
    throw new Error('Not implemented')
  })
