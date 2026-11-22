import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceSubscribeToEventRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceSubscribeToEventHandler = app.openapi(
  postXAmzTargetInspectorServiceSubscribeToEventRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
