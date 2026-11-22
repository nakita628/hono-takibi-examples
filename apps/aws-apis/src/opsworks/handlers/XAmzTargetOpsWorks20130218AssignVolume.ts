import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218AssignVolumeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218AssignVolumeHandler = app.openapi(
  postXAmzTargetOpsWorks20130218AssignVolumeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
