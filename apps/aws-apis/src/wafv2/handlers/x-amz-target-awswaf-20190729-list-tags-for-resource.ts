import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729ListTagsForResourceHandler = app.openapi(
  postXAmzTargetAWSWAF20190729ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
