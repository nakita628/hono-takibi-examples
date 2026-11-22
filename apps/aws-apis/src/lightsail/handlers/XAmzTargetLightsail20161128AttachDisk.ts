import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128AttachDiskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128AttachDiskHandler = app.openapi(
  postXAmzTargetLightsail20161128AttachDiskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
