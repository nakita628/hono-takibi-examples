import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteTableVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueDeleteTableVersionHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteTableVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
