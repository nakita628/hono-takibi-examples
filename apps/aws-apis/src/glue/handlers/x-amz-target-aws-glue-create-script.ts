import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreateScriptRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueCreateScriptHandler = app.openapi(
  postXAmzTargetAWSGlueCreateScriptRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
