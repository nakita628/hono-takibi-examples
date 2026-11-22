import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetTagsHandler = app.openapi(
  postXAmzTargetAWSGlueGetTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
