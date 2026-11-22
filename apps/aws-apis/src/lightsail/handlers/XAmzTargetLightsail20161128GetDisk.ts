import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetDiskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetDiskHandler = app.openapi(
  postXAmzTargetLightsail20161128GetDiskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
