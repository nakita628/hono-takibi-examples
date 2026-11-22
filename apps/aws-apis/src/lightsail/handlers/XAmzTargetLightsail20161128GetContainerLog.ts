import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetContainerLogRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetContainerLogHandler = app.openapi(
  postXAmzTargetLightsail20161128GetContainerLogRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
