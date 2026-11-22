import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218SetTimeBasedAutoScalingRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218SetTimeBasedAutoScalingHandler = app.openapi(
  postXAmzTargetOpsWorks20130218SetTimeBasedAutoScalingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
