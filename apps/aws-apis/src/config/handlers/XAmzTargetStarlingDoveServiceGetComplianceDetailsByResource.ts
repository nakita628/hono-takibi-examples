import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetComplianceDetailsByResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceGetComplianceDetailsByResourceHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceGetComplianceDetailsByResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
