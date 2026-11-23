import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128StopGUISessionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128StopGuiSessionHandler = app.openapi(
  postXAmzTargetLightsail20161128StopGUISessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
