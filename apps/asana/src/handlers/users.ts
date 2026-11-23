import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUsersRoute,
  getUsersUserGidFavoritesRoute,
  getUsersUserGidNotificationsRoute,
  getUsersUserGidRoute,
  getUsersUserGidTeamMembershipsRoute,
  getUsersUserGidTeamsRoute,
  getUsersUserGidUserTaskListRoute,
  getUsersUserGidWorkspaceMembershipsRoute,
  postUsersUserGidNotificationsMarkReadRoute,
  postUsersUserGidNotificationsMarkUnreadRoute,
  putUsersUserGidRoute,
} from '../routes'

export const getUsersUserGidNotificationsRouteHandler: RouteHandler<
  typeof getUsersUserGidNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersUserGidNotificationsMarkReadRouteHandler: RouteHandler<
  typeof postUsersUserGidNotificationsMarkReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersUserGidNotificationsMarkUnreadRouteHandler: RouteHandler<
  typeof postUsersUserGidNotificationsMarkUnreadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserGidTeamMembershipsRouteHandler: RouteHandler<
  typeof getUsersUserGidTeamMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserGidTeamsRouteHandler: RouteHandler<
  typeof getUsersUserGidTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserGidUserTaskListRouteHandler: RouteHandler<
  typeof getUsersUserGidUserTaskListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersRouteHandler: RouteHandler<typeof getUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserGidRouteHandler: RouteHandler<typeof getUsersUserGidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putUsersUserGidRouteHandler: RouteHandler<typeof putUsersUserGidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserGidFavoritesRouteHandler: RouteHandler<
  typeof getUsersUserGidFavoritesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserGidWorkspaceMembershipsRouteHandler: RouteHandler<
  typeof getUsersUserGidWorkspaceMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
