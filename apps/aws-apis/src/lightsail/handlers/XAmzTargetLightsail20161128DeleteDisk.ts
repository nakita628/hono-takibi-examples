import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DeleteDiskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128DeleteDiskHandler = app.openapi(
  postXAmzTargetLightsail20161128DeleteDiskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
