import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteBlueprintRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueDeleteBlueprintHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteBlueprintRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
