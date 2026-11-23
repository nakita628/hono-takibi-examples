import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetTagsHandler = app.openapi(
  postXAmzTargetAWSGlueGetTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
