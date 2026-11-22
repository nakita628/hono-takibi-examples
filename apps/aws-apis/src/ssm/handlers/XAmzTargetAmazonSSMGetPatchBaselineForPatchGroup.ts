import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetPatchBaselineForPatchGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMGetPatchBaselineForPatchGroupHandler = app.openapi(
  postXAmzTargetAmazonSSMGetPatchBaselineForPatchGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
