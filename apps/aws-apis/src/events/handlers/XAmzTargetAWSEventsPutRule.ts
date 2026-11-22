import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsPutRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSEventsPutRuleHandler = app.openapi(
  postXAmzTargetAWSEventsPutRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
