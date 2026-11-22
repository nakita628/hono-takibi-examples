import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetInspectorServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
