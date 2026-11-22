import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDescribeConnectionAliasPermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceDescribeConnectionAliasPermissionsHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDescribeConnectionAliasPermissionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
