import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUsersRoute,
  getUsersUserIdCommentsRoute,
  getUsersUserIdFavoritesRoute,
  getUsersUserIdFollowersRoute,
  getUsersUserIdFollowingsFollowingIdRoute,
  getUsersUserIdFollowingsRoute,
  getUsersUserIdLikesTracksRoute,
  getUsersUserIdPlaylistsRoute,
  getUsersUserIdRoute,
  getUsersUserIdTracksRoute,
  getUsersUserIdWebProfilesRoute,
} from '../routes'

export const getUsersRouteHandler: RouteHandler<typeof getUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdRouteHandler: RouteHandler<typeof getUsersUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdCommentsRouteHandler: RouteHandler<
  typeof getUsersUserIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdFavoritesRouteHandler: RouteHandler<
  typeof getUsersUserIdFavoritesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdFollowersRouteHandler: RouteHandler<
  typeof getUsersUserIdFollowersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdFollowingsRouteHandler: RouteHandler<
  typeof getUsersUserIdFollowingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdFollowingsFollowingIdRouteHandler: RouteHandler<
  typeof getUsersUserIdFollowingsFollowingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdLikesTracksRouteHandler: RouteHandler<
  typeof getUsersUserIdLikesTracksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdPlaylistsRouteHandler: RouteHandler<
  typeof getUsersUserIdPlaylistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdTracksRouteHandler: RouteHandler<
  typeof getUsersUserIdTracksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdWebProfilesRouteHandler: RouteHandler<
  typeof getUsersUserIdWebProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
