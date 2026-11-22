import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101UntagResourceHandler = app.openapi(
  postXAmzTargetAWSFMS20180101UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
