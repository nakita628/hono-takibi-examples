import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInsightsOrgSlugSummaryRoute,
  getInsightsPagesProjectSlugSummaryRoute,
  getInsightsProjectSlugBranchesRoute,
  getInsightsProjectSlugFlakyTestsRoute,
  getInsightsProjectSlugWorkflowsRoute,
  getInsightsProjectSlugWorkflowsWorkflowNameJobsRoute,
  getInsightsProjectSlugWorkflowsWorkflowNameRoute,
  getInsightsProjectSlugWorkflowsWorkflowNameSummaryRoute,
  getInsightsProjectSlugWorkflowsWorkflowNameTestMetricsRoute,
  getInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobsRoute,
  postInsightsPagesProjectSlugSummaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const insightsHandler = app
  .openapi(postInsightsPagesProjectSlugSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsightsPagesProjectSlugSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsightsTimeSeriesProjectSlugWorkflowsWorkflowNameJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsightsOrgSlugSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsightsProjectSlugBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsightsProjectSlugFlakyTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsightsProjectSlugWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsightsProjectSlugWorkflowsWorkflowNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsightsProjectSlugWorkflowsWorkflowNameJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsightsProjectSlugWorkflowsWorkflowNameSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsightsProjectSlugWorkflowsWorkflowNameTestMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
