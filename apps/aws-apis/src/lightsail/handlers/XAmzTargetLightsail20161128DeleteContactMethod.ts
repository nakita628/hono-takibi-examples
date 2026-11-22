import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DeleteContactMethodRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128DeleteContactMethodHandler = app.openapi(
  postXAmzTargetLightsail20161128DeleteContactMethodRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
