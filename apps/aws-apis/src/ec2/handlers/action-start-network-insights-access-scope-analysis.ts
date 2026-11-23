import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionStartNetworkInsightsAccessScopeAnalysisRoute,
  postActionStartNetworkInsightsAccessScopeAnalysisRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionStartNetworkInsightsAccessScopeAnalysisHandler = app
  .openapi(getActionStartNetworkInsightsAccessScopeAnalysisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionStartNetworkInsightsAccessScopeAnalysisRoute, (c) => {
    throw new Error('Not implemented')
  })
