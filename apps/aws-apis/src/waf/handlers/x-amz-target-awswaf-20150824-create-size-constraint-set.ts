import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824CreateSizeConstraintSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824CreateSizeConstraintSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824CreateSizeConstraintSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
