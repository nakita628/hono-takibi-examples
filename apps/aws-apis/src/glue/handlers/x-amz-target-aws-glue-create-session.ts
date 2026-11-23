import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreateSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueCreateSessionHandler = app.openapi(
  postXAmzTargetAWSGlueCreateSessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
