import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeComplianceByConfigRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceDescribeComplianceByConfigRuleHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeComplianceByConfigRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
