import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMRegisterPatchBaselineForPatchGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmRegisterPatchBaselineForPatchGroupHandler = app.openapi(
  postXAmzTargetAmazonSSMRegisterPatchBaselineForPatchGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
