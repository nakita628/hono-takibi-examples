import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetPartitionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetPartitionsHandler = app.openapi(
  postXAmzTargetAWSGlueGetPartitionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
