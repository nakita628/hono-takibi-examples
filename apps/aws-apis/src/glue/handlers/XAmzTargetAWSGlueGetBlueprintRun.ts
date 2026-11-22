import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetBlueprintRunRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetBlueprintRunHandler = app.openapi(
  postXAmzTargetAWSGlueGetBlueprintRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
