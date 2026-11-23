import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729UntagResourceHandler = app.openapi(
  postXAmzTargetAWSWAF20190729UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
