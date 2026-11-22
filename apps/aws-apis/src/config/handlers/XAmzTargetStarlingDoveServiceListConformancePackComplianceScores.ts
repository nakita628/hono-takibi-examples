import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceListConformancePackComplianceScoresRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceListConformancePackComplianceScoresHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceListConformancePackComplianceScoresRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
