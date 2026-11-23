import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkspacesServiceAssociateConnectionAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkspacesServiceAssociateConnectionAliasHandler = app.openapi(
  postXAmzTargetWorkspacesServiceAssociateConnectionAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
