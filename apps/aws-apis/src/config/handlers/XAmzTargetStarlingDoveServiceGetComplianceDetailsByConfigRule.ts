import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetComplianceDetailsByConfigRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceGetComplianceDetailsByConfigRuleHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceGetComplianceDetailsByConfigRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
