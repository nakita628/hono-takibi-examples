import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsUpdateArchiveRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsUpdateArchiveHandler = app.openapi(
  postXAmzTargetAWSEventsUpdateArchiveRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
