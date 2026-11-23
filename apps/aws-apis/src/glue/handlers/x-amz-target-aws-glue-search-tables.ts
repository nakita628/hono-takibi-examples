import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueSearchTablesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueSearchTablesHandler = app.openapi(
  postXAmzTargetAWSGlueSearchTablesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
