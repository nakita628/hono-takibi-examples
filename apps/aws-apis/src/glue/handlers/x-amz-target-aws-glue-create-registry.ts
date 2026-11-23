import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreateRegistryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueCreateRegistryHandler = app.openapi(
  postXAmzTargetAWSGlueCreateRegistryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
