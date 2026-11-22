import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218RegisterVolumeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218RegisterVolumeHandler = app.openapi(
  postXAmzTargetOpsWorks20130218RegisterVolumeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
