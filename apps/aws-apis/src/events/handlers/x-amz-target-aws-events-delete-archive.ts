import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsDeleteArchiveRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsDeleteArchiveHandler = app.openapi(
  postXAmzTargetAWSEventsDeleteArchiveRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
