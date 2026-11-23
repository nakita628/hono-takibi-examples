import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetContainerLogRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetContainerLogHandler = app.openapi(
  postXAmzTargetLightsail20161128GetContainerLogRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
