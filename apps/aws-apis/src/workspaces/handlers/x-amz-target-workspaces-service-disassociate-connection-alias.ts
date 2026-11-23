import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceDisassociateConnectionAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceDisassociateConnectionAliasHandler = app.openapi(
  postXAmzTargetWorkspacesServiceDisassociateConnectionAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
