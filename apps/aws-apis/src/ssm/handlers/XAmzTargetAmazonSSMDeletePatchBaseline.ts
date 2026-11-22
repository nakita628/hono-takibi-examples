import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDeletePatchBaselineRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDeletePatchBaselineHandler = app.openapi(
  postXAmzTargetAmazonSSMDeletePatchBaselineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
