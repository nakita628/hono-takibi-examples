import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128ListActivatedRulesInRuleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128ListActivatedRulesInRuleGroupHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128ListActivatedRulesInRuleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
