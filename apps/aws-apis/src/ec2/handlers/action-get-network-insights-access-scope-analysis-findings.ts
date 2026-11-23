import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetNetworkInsightsAccessScopeAnalysisFindingsRoute,
  postActionGetNetworkInsightsAccessScopeAnalysisFindingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetNetworkInsightsAccessScopeAnalysisFindingsHandler = app
  .openapi(getActionGetNetworkInsightsAccessScopeAnalysisFindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetNetworkInsightsAccessScopeAnalysisFindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
