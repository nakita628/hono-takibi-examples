import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128UpdateContainerServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128UpdateContainerServiceHandler = app.openapi(
  postXAmzTargetLightsail20161128UpdateContainerServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
