import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128StopGUISessionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128StopGUISessionHandler = app.openapi(
  postXAmzTargetLightsail20161128StopGUISessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
