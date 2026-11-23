import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceCreateExclusionsPreviewRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetInspectorServiceCreateExclusionsPreviewHandler = app.openapi(
  postXAmzTargetInspectorServiceCreateExclusionsPreviewRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
