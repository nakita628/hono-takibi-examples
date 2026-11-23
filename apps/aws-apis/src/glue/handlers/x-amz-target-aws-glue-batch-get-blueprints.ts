import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueBatchGetBlueprintsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueBatchGetBlueprintsHandler = app.openapi(
  postXAmzTargetAWSGlueBatchGetBlueprintsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
