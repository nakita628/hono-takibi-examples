import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101TagResourceHandler = app.openapi(
  postXAmzTargetAWSFMS20180101TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
