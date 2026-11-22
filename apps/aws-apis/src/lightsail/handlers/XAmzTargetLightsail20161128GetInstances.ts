import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetInstancesHandler = app.openapi(
  postXAmzTargetLightsail20161128GetInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
