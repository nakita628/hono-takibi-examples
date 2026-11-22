import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDeleteConnectionAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceDeleteConnectionAliasHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDeleteConnectionAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
