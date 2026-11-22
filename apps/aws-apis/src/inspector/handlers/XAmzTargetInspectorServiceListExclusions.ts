import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceListExclusionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceListExclusionsHandler = app.openapi(
  postXAmzTargetInspectorServiceListExclusionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
