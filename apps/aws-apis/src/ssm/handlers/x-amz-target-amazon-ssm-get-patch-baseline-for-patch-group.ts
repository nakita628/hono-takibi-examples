import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetPatchBaselineForPatchGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmGetPatchBaselineForPatchGroupHandler = app.openapi(
  postXAmzTargetAmazonSSMGetPatchBaselineForPatchGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
