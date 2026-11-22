import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetAggregateConfigRuleComplianceSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceGetAggregateConfigRuleComplianceSummaryHandler =
  app.openapi(
    postXAmzTargetStarlingDoveServiceGetAggregateConfigRuleComplianceSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
