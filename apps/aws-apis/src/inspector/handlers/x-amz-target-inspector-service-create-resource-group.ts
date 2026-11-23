import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceCreateResourceGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetInspectorServiceCreateResourceGroupHandler = app.openapi(
  postXAmzTargetInspectorServiceCreateResourceGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
