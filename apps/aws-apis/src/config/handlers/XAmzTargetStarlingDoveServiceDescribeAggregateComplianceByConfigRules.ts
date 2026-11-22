import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConfigRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConfigRulesHandler =
  app.openapi(
    postXAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConfigRulesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
