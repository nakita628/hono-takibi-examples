import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueStopSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueStopSessionHandler = app.openapi(
  postXAmzTargetAWSGlueStopSessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
