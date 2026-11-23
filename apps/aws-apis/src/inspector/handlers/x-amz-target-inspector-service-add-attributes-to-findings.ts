import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceAddAttributesToFindingsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetInspectorServiceAddAttributesToFindingsHandler = app.openapi(
  postXAmzTargetInspectorServiceAddAttributesToFindingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
