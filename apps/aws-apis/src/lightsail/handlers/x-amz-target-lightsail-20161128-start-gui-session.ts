import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128StartGUISessionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128StartGuiSessionHandler = app.openapi(
  postXAmzTargetLightsail20161128StartGUISessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
