import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetConformancePackComplianceDetailsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceGetConformancePackComplianceDetailsHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceGetConformancePackComplianceDetailsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
