import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetMappingRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetMappingHandler = app.openapi(
  postXAmzTargetAWSGlueGetMappingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
