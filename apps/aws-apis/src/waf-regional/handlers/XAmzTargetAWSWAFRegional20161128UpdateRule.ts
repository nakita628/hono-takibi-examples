import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128UpdateRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128UpdateRuleHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128UpdateRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
