import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceCreateExclusionsPreviewRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceCreateExclusionsPreviewHandler = app.openapi(
  postXAmzTargetInspectorServiceCreateExclusionsPreviewRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
