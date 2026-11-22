import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceDescribeConfigRuleEvaluationStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStarlingDoveServiceDescribeConfigRuleEvaluationStatusHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceDescribeConfigRuleEvaluationStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
