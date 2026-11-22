import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128GetInstanceHandler = app.openapi(
  postXAmzTargetLightsail20161128GetInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
