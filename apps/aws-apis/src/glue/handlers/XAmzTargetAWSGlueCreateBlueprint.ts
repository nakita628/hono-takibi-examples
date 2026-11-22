import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreateBlueprintRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueCreateBlueprintHandler = app.openapi(
  postXAmzTargetAWSGlueCreateBlueprintRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
