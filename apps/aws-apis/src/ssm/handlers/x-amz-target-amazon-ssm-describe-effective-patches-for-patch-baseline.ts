import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeEffectivePatchesForPatchBaselineRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDescribeEffectivePatchesForPatchBaselineHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeEffectivePatchesForPatchBaselineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
