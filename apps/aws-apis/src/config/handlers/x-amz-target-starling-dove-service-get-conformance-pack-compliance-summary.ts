import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetConformancePackComplianceSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceGetConformancePackComplianceSummaryHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceGetConformancePackComplianceSummaryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
