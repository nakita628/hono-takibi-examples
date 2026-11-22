import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteRegistryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueDeleteRegistryHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteRegistryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
