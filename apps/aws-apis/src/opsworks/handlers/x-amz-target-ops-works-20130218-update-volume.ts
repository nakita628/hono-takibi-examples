import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218UpdateVolumeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218UpdateVolumeHandler = app.openapi(
  postXAmzTargetOpsWorks20130218UpdateVolumeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
