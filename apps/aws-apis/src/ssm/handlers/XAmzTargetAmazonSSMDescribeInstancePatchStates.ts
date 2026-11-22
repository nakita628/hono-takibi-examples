import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeInstancePatchStatesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDescribeInstancePatchStatesHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeInstancePatchStatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
