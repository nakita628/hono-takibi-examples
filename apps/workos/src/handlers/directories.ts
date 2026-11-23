import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDirectoriesIdRoute,
  getDirectoriesDirectoryIdGroupsGroupIdRoute,
  getDirectoriesDirectoryIdGroupsRoute,
  getDirectoriesDirectoryIdUsersRoute,
  getDirectoriesDirectoryIdUsersUserIdRoute,
  getDirectoriesIdRoute,
  getDirectoriesRoute,
  postDirectoriesIdSyncRoute,
} from '../routes'

export const getDirectoriesRouteHandler: RouteHandler<typeof getDirectoriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoriesDirectoryIdGroupsRouteHandler: RouteHandler<
  typeof getDirectoriesDirectoryIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoriesDirectoryIdGroupsGroupIdRouteHandler: RouteHandler<
  typeof getDirectoriesDirectoryIdGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoriesDirectoryIdUsersRouteHandler: RouteHandler<
  typeof getDirectoriesDirectoryIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoriesDirectoryIdUsersUserIdRouteHandler: RouteHandler<
  typeof getDirectoriesDirectoryIdUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDirectoriesIdRouteHandler: RouteHandler<typeof getDirectoriesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteDirectoriesIdRouteHandler: RouteHandler<
  typeof deleteDirectoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDirectoriesIdSyncRouteHandler: RouteHandler<
  typeof postDirectoriesIdSyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}
