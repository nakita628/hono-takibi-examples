import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSEventsPutPermissionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsEventsPutPermissionHandler = app.openapi(
  postXAmzTargetAWSEventsPutPermissionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
