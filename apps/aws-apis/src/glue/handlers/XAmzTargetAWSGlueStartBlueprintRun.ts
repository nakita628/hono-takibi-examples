import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueStartBlueprintRunRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueStartBlueprintRunHandler = app.openapi(
  postXAmzTargetAWSGlueStartBlueprintRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
