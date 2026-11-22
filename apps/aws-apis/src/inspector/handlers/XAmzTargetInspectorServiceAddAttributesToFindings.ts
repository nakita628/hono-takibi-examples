import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceAddAttributesToFindingsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceAddAttributesToFindingsHandler = app.openapi(
  postXAmzTargetInspectorServiceAddAttributesToFindingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
