import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUserEmailsEmailRoute,
  getUserEmailsRoute,
  getUserRoute,
  getUserWorkspacesRoute,
  getUserWorkspacesWorkspacePermissionRoute,
  getUserWorkspacesWorkspacePermissionsRepositoriesRoute,
} from '../routes'

export const getUserRouteHandler: RouteHandler<typeof getUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserEmailsRouteHandler: RouteHandler<typeof getUserEmailsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserEmailsEmailRouteHandler: RouteHandler<typeof getUserEmailsEmailRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUserWorkspacesRouteHandler: RouteHandler<typeof getUserWorkspacesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUserWorkspacesWorkspacePermissionRouteHandler: RouteHandler<
  typeof getUserWorkspacesWorkspacePermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserWorkspacesWorkspacePermissionsRepositoriesRouteHandler: RouteHandler<
  typeof getUserWorkspacesWorkspacePermissionsRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
