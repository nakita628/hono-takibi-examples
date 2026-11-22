import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceCreateResourceGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceCreateResourceGroupHandler = app.openapi(
  postXAmzTargetInspectorServiceCreateResourceGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
