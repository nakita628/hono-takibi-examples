import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListStatementsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueListStatementsHandler = app.openapi(
  postXAmzTargetAWSGlueListStatementsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
