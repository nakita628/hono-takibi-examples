import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUsersIdApplicationsRoute,
  getUsersIdRoute,
  getUsersUserIdGitInfoRoute,
  postUsersRoute,
} from '../routes'

export const postUsersRouteHandler: RouteHandler<typeof postUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersIdRouteHandler: RouteHandler<typeof getUsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersIdApplicationsRouteHandler: RouteHandler<
  typeof getUsersIdApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdGitInfoRouteHandler: RouteHandler<
  typeof getUsersUserIdGitInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
