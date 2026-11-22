import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetRegistryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetRegistryHandler = app.openapi(
  postXAmzTargetAWSGlueGetRegistryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
