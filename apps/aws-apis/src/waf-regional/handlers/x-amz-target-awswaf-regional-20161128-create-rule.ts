import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128CreateRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128CreateRuleHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128CreateRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
