import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWorkspacesDeleteWorkspaceRoute,
  getWorkspacesAllowedDomainAutoInviteRoute,
  getWorkspacesListAsSuperadminRoute,
  getWorkspacesListRoute,
  getWorkspacesUsersRoute,
  postWorkspacesCreateRoute,
  postWorkspacesExistsRoute,
  postWorkspacesExistsUsernameRoute,
  postWorkspacesSessionWorkspaceRetentionRoute,
  postWorkspacesSessionWorkspaceStatusRoute,
  postWorkspacesUnarchiveWorkspaceRoute,
} from '../routes'

export const getWorkspacesListRouteHandler: RouteHandler<typeof getWorkspacesListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getWorkspacesAllowedDomainAutoInviteRouteHandler: RouteHandler<
  typeof getWorkspacesAllowedDomainAutoInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWorkspacesUsersRouteHandler: RouteHandler<typeof getWorkspacesUsersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postWorkspacesSessionWorkspaceStatusRouteHandler: RouteHandler<
  typeof postWorkspacesSessionWorkspaceStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWorkspacesSessionWorkspaceRetentionRouteHandler: RouteHandler<
  typeof postWorkspacesSessionWorkspaceRetentionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWorkspacesListAsSuperadminRouteHandler: RouteHandler<
  typeof getWorkspacesListAsSuperadminRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWorkspacesCreateRouteHandler: RouteHandler<
  typeof postWorkspacesCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWorkspacesExistsRouteHandler: RouteHandler<
  typeof postWorkspacesExistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWorkspacesExistsUsernameRouteHandler: RouteHandler<
  typeof postWorkspacesExistsUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWorkspacesUnarchiveWorkspaceRouteHandler: RouteHandler<
  typeof postWorkspacesUnarchiveWorkspaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWorkspacesDeleteWorkspaceRouteHandler: RouteHandler<
  typeof deleteWorkspacesDeleteWorkspaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
