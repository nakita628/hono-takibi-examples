import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueBatchDeleteConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueBatchDeleteConnectionHandler = app.openapi(
  postXAmzTargetAWSGlueBatchDeleteConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
