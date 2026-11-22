import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729UpdateManagedRuleSetVersionExpiryDateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729UpdateManagedRuleSetVersionExpiryDateHandler = app.openapi(
  postXAmzTargetAWSWAF20190729UpdateManagedRuleSetVersionExpiryDateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
