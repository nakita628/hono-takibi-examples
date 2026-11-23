import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceUnsubscribeFromEventRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetInspectorServiceUnsubscribeFromEventHandler = app.openapi(
  postXAmzTargetInspectorServiceUnsubscribeFromEventRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
