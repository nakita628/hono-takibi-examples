import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsCreateArchiveRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsCreateArchiveHandler = app.openapi(
  postXAmzTargetAWSEventsCreateArchiveRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
