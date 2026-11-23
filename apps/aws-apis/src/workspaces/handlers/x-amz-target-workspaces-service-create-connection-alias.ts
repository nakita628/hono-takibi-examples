import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceCreateConnectionAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceCreateConnectionAliasHandler = app.openapi(
  postXAmzTargetWorkspacesServiceCreateConnectionAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
