import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceCreateConnectionAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceCreateConnectionAliasHandler = app.openapi(
  postXAmzTargetWorkspacesServiceCreateConnectionAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
