import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824GetSizeConstraintSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824GetSizeConstraintSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824GetSizeConstraintSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
