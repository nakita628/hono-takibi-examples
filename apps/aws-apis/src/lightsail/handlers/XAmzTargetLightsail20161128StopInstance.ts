import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128StopInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128StopInstanceHandler = app.openapi(
  postXAmzTargetLightsail20161128StopInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
