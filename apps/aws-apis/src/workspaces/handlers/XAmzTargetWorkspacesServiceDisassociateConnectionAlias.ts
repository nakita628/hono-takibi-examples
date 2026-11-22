import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDisassociateConnectionAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkspacesServiceDisassociateConnectionAliasHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDisassociateConnectionAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
