import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetConformancePackComplianceDetailsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceGetConformancePackComplianceDetailsHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceGetConformancePackComplianceDetailsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
