import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetBlueprintRunsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetBlueprintRunsHandler = app.openapi(
  postXAmzTargetAWSGlueGetBlueprintRunsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
