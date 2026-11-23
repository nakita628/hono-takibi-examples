import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMCreatePatchBaselineRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmCreatePatchBaselineHandler = app.openapi(
  postXAmzTargetAmazonSSMCreatePatchBaselineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
