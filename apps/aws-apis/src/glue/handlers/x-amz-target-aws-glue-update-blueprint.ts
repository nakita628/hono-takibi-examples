import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateBlueprintRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueUpdateBlueprintHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateBlueprintRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
