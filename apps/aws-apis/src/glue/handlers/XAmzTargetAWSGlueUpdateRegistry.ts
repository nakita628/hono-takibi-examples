import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateRegistryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueUpdateRegistryHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateRegistryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
