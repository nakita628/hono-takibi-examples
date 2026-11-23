import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetPatchBaselineRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmGetPatchBaselineHandler = app.openapi(
  postXAmzTargetAmazonSSMGetPatchBaselineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
