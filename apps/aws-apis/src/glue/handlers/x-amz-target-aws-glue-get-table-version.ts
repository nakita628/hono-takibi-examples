import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetTableVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetTableVersionHandler = app.openapi(
  postXAmzTargetAWSGlueGetTableVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
