import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101ListTagsForResourceHandler = app.openapi(
  postXAmzTargetAWSFMS20180101ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
