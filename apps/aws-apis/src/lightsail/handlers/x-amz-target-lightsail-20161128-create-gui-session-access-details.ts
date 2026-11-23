import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CreateGUISessionAccessDetailsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128CreateGuiSessionAccessDetailsHandler = app.openapi(
  postXAmzTargetLightsail20161128CreateGUISessionAccessDetailsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
