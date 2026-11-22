import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMRegisterDefaultPatchBaselineRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMRegisterDefaultPatchBaselineHandler = app.openapi(
  postXAmzTargetAmazonSSMRegisterDefaultPatchBaselineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
