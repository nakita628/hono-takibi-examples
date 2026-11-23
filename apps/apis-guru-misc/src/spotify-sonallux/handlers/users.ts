import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUsersUserIdPlaylistsRoute,
  getUsersUserIdRoute,
  postUsersUserIdPlaylistsRoute,
} from '../routes'

export const getUsersUserIdRouteHandler: RouteHandler<typeof getUsersUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdPlaylistsRouteHandler: RouteHandler<
  typeof getUsersUserIdPlaylistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersUserIdPlaylistsRouteHandler: RouteHandler<
  typeof postUsersUserIdPlaylistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
