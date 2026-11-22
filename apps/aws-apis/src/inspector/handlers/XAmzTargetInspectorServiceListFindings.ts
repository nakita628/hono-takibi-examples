import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceListFindingsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceListFindingsHandler = app.openapi(
  postXAmzTargetInspectorServiceListFindingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
