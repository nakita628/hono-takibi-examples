import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDescribeTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceDescribeTagsHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDescribeTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
