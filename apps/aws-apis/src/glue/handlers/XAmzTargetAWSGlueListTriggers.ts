import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListTriggersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueListTriggersHandler = app.openapi(
  postXAmzTargetAWSGlueListTriggersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
