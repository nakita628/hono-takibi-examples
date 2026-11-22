import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CreateGUISessionAccessDetailsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128CreateGUISessionAccessDetailsHandler = app.openapi(
  postXAmzTargetLightsail20161128CreateGUISessionAccessDetailsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
