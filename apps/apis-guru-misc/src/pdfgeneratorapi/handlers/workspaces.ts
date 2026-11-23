import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteWorkspacesWorkspaceIdRoute, getWorkspacesWorkspaceIdRoute } from '../routes'

export const deleteWorkspacesWorkspaceIdRouteHandler: RouteHandler<
  typeof deleteWorkspacesWorkspaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWorkspacesWorkspaceIdRouteHandler: RouteHandler<
  typeof getWorkspacesWorkspaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
