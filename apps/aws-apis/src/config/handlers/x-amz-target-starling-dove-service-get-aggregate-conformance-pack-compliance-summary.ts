import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetAggregateConformancePackComplianceSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceGetAggregateConformancePackComplianceSummaryHandler =
  app.openapi(
    postXAmzTargetStarlingDoveServiceGetAggregateConformancePackComplianceSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
