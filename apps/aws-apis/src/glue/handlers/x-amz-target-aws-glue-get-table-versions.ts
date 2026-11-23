import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetTableVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetTableVersionsHandler = app.openapi(
  postXAmzTargetAWSGlueGetTableVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
