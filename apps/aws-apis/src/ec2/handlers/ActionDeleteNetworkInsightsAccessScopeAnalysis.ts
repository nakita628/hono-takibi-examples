import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteNetworkInsightsAccessScopeAnalysisRoute,
  postActionDeleteNetworkInsightsAccessScopeAnalysisRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteNetworkInsightsAccessScopeAnalysisHandler = app
  .openapi(getActionDeleteNetworkInsightsAccessScopeAnalysisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteNetworkInsightsAccessScopeAnalysisRoute, (c) => {
    throw new Error('Not implemented')
  })
