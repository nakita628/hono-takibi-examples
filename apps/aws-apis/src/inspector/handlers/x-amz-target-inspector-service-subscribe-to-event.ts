import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceSubscribeToEventRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetInspectorServiceSubscribeToEventHandler = app.openapi(
  postXAmzTargetInspectorServiceSubscribeToEventRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
