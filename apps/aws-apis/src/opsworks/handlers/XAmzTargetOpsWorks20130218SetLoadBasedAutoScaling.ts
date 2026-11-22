import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218SetLoadBasedAutoScalingRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218SetLoadBasedAutoScalingHandler = app.openapi(
  postXAmzTargetOpsWorks20130218SetLoadBasedAutoScalingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
