import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeInstancePatchStatesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDescribeInstancePatchStatesHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeInstancePatchStatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
