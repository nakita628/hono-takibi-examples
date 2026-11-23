import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListCustomEntityTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueListCustomEntityTypesHandler = app.openapi(
  postXAmzTargetAWSGlueListCustomEntityTypesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
