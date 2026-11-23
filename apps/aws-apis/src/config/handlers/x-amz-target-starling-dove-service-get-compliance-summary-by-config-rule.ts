import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetComplianceSummaryByConfigRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceGetComplianceSummaryByConfigRuleHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceGetComplianceSummaryByConfigRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
