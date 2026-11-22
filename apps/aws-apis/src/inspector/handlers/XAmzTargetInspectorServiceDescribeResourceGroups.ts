import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceDescribeResourceGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceDescribeResourceGroupsHandler = app.openapi(
  postXAmzTargetInspectorServiceDescribeResourceGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
