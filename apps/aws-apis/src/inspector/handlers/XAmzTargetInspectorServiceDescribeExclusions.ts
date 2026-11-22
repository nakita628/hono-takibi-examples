import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceDescribeExclusionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceDescribeExclusionsHandler = app.openapi(
  postXAmzTargetInspectorServiceDescribeExclusionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
