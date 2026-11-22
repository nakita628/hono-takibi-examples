import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetComplianceSummaryByResourceTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceGetComplianceSummaryByResourceTypeHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceGetComplianceSummaryByResourceTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
