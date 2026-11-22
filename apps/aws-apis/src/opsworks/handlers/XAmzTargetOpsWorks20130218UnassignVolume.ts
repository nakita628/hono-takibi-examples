import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218UnassignVolumeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218UnassignVolumeHandler = app.openapi(
  postXAmzTargetOpsWorks20130218UnassignVolumeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
