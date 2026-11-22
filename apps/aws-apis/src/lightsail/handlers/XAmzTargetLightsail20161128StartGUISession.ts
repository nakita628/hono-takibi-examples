import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128StartGUISessionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128StartGUISessionHandler = app.openapi(
  postXAmzTargetLightsail20161128StartGUISessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
