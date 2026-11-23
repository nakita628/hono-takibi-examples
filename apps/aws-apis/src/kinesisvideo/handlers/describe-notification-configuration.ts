import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeNotificationConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const describeNotificationConfigurationHandler = app.openapi(
  postDescribeNotificationConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
