import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729GetManagedRuleSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729GetManagedRuleSetHandler = app.openapi(
  postXAmzTargetAWSWAF20190729GetManagedRuleSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
