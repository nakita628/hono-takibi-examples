import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824ListActivatedRulesInRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824ListActivatedRulesInRuleGroupHandler = app.openapi(
  postXAmzTargetAWSWAF20150824ListActivatedRulesInRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
