import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetDefaultPatchBaselineRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMGetDefaultPatchBaselineHandler = app.openapi(
  postXAmzTargetAmazonSSMGetDefaultPatchBaselineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
