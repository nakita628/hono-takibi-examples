import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListBlueprintsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueListBlueprintsHandler = app.openapi(
  postXAmzTargetAWSGlueListBlueprintsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
