import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101GetNotificationChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101GetNotificationChannelHandler = app.openapi(
  postXAmzTargetAWSFMS20180101GetNotificationChannelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
