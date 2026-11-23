import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DetachDiskRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128DetachDiskHandler = app.openapi(
  postXAmzTargetLightsail20161128DetachDiskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
