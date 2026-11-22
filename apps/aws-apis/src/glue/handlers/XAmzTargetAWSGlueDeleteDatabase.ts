import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteDatabaseRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueDeleteDatabaseHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteDatabaseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
