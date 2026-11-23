import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824DeleteSizeConstraintSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824DeleteSizeConstraintSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824DeleteSizeConstraintSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
