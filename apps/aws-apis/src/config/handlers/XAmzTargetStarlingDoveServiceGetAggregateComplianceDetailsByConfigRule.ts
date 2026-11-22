import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceGetAggregateComplianceDetailsByConfigRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceGetAggregateComplianceDetailsByConfigRuleHandler =
  app.openapi(
    postXAmzTargetStarlingDoveServiceGetAggregateComplianceDetailsByConfigRuleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
