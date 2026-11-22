import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueSearchTablesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueSearchTablesHandler = app.openapi(
  postXAmzTargetAWSGlueSearchTablesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
