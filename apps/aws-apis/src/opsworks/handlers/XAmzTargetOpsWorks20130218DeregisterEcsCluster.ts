import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DeregisterEcsClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218DeregisterEcsClusterHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DeregisterEcsClusterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
