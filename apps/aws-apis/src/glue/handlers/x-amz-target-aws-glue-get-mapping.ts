import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetMappingRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetMappingHandler = app.openapi(
  postXAmzTargetAWSGlueGetMappingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
