import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101DeleteNotificationChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101DeleteNotificationChannelHandler = app.openapi(
  postXAmzTargetAWSFMS20180101DeleteNotificationChannelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
