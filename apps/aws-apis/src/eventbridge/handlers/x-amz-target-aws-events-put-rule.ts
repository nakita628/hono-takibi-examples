import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsPutRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsPutRuleHandler = app.openapi(
  postXAmzTargetAWSEventsPutRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
