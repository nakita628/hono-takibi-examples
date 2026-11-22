import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824DeleteRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824DeleteRuleHandler = app.openapi(
  postXAmzTargetAWSWAF20150824DeleteRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
