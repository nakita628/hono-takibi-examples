import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDescribeConnectionAliasesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceDescribeConnectionAliasesHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDescribeConnectionAliasesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
