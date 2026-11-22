import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDescribeConnectionAliasesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceDescribeConnectionAliasesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDescribeConnectionAliasesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
