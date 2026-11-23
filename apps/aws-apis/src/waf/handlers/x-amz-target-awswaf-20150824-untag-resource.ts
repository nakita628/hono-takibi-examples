import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824UntagResourceHandler = app.openapi(
  postXAmzTargetAWSWAF20150824UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
