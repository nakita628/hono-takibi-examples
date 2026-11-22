import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMCreatePatchBaselineRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMCreatePatchBaselineHandler = app.openapi(
  postXAmzTargetAmazonSSMCreatePatchBaselineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
