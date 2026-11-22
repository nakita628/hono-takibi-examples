import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteBlueprintRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueDeleteBlueprintHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteBlueprintRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
