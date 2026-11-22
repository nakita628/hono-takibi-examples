import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceListEventSubscriptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceListEventSubscriptionsHandler = app.openapi(
  postXAmzTargetInspectorServiceListEventSubscriptionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
