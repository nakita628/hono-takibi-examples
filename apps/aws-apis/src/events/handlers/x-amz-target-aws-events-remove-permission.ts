import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsRemovePermissionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsRemovePermissionHandler = app.openapi(
  postXAmzTargetAWSEventsRemovePermissionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
