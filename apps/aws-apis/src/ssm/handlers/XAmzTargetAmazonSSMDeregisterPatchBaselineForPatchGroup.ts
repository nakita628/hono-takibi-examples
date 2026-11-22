import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDeregisterPatchBaselineForPatchGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDeregisterPatchBaselineForPatchGroupHandler = app.openapi(
  postXAmzTargetAmazonSSMDeregisterPatchBaselineForPatchGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
