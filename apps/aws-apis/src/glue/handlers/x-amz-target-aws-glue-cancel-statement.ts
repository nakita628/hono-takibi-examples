import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCancelStatementRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueCancelStatementHandler = app.openapi(
  postXAmzTargetAWSGlueCancelStatementRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
