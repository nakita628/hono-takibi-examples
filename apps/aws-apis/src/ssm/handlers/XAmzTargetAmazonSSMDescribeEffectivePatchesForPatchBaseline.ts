import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeEffectivePatchesForPatchBaselineRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDescribeEffectivePatchesForPatchBaselineHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeEffectivePatchesForPatchBaselineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
