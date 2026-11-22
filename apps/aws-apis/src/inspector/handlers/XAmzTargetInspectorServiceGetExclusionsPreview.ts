import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceGetExclusionsPreviewRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceGetExclusionsPreviewHandler = app.openapi(
  postXAmzTargetInspectorServiceGetExclusionsPreviewRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
