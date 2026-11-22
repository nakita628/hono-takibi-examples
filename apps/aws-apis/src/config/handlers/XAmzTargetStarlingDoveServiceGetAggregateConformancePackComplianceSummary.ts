import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetAggregateConformancePackComplianceSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceGetAggregateConformancePackComplianceSummaryHandler =
  app.openapi(
    postXAmzTargetStarlingDoveServiceGetAggregateConformancePackComplianceSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
