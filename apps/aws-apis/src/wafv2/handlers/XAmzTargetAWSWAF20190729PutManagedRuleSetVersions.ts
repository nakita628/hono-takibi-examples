import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729PutManagedRuleSetVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729PutManagedRuleSetVersionsHandler = app.openapi(
  postXAmzTargetAWSWAF20190729PutManagedRuleSetVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
