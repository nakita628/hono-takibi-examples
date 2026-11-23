import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetComplianceDetailsByConfigRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceGetComplianceDetailsByConfigRuleHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceGetComplianceDetailsByConfigRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
