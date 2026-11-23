import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceListExclusionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetInspectorServiceListExclusionsHandler = app.openapi(
  postXAmzTargetInspectorServiceListExclusionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
