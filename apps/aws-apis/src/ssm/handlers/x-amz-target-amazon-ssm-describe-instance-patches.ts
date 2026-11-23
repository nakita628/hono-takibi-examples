import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeInstancePatchesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDescribeInstancePatchesHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeInstancePatchesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
