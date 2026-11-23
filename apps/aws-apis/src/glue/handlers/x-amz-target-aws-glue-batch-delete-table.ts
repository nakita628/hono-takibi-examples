import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueBatchDeleteTableRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueBatchDeleteTableHandler = app.openapi(
  postXAmzTargetAWSGlueBatchDeleteTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
