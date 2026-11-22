import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetBlueprintRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetBlueprintHandler = app.openapi(
  postXAmzTargetAWSGlueGetBlueprintRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
