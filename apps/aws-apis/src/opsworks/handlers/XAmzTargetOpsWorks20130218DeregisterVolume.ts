import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DeregisterVolumeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218DeregisterVolumeHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DeregisterVolumeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
