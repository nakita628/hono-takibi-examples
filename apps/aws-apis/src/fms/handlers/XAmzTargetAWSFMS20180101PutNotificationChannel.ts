import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101PutNotificationChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101PutNotificationChannelHandler = app.openapi(
  postXAmzTargetAWSFMS20180101PutNotificationChannelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
