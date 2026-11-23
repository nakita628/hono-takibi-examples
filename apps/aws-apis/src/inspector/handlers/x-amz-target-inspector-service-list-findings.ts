import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceListFindingsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetInspectorServiceListFindingsHandler = app.openapi(
  postXAmzTargetInspectorServiceListFindingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
