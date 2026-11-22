import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMUpdatePatchBaselineRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMUpdatePatchBaselineHandler = app.openapi(
  postXAmzTargetAmazonSSMUpdatePatchBaselineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
