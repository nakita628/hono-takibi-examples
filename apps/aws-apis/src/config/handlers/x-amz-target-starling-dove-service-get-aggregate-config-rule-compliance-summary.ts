import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetAggregateConfigRuleComplianceSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceGetAggregateConfigRuleComplianceSummaryHandler =
  app.openapi(
    postXAmzTargetStarlingDoveServiceGetAggregateConfigRuleComplianceSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
