import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDescribeClientPropertiesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceDescribeClientPropertiesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDescribeClientPropertiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
