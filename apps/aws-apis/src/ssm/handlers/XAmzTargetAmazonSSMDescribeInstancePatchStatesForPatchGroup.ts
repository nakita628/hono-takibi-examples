import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeInstancePatchStatesForPatchGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDescribeInstancePatchStatesForPatchGroupHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeInstancePatchStatesForPatchGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
