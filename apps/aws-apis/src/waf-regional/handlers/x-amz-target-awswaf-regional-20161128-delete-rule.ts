import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128DeleteRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128DeleteRuleHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128DeleteRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
