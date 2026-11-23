import type { RouteHandler } from '@hono/zod-openapi'
import type { getWorkspacesRoute, getWorkspacesWorkspaceSlugRoute } from '../routes'

export const getWorkspacesRouteHandler: RouteHandler<typeof getWorkspacesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getWorkspacesWorkspaceSlugRouteHandler: RouteHandler<
  typeof getWorkspacesWorkspaceSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}
