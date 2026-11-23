import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceDescribeExclusionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetInspectorServiceDescribeExclusionsHandler = app.openapi(
  postXAmzTargetInspectorServiceDescribeExclusionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
