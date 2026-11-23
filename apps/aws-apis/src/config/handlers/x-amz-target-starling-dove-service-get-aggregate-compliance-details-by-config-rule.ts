import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetAggregateComplianceDetailsByConfigRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceGetAggregateComplianceDetailsByConfigRuleHandler =
  app.openapi(
    postXAmzTargetStarlingDoveServiceGetAggregateComplianceDetailsByConfigRuleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
