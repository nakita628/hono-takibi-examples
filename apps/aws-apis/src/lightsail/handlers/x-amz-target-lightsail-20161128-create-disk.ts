import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CreateDiskRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128CreateDiskHandler = app.openapi(
  postXAmzTargetLightsail20161128CreateDiskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
