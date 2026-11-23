import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDescribeTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceDescribeTagsHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDescribeTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
