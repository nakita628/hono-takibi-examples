import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServicePreviewAgentsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServicePreviewAgentsHandler = app.openapi(
  postXAmzTargetInspectorServicePreviewAgentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
