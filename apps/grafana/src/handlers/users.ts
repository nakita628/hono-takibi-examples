import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUsersLookupRoute,
  getUsersRoute,
  getUsersSearchRoute,
  getUsersUserIdOrgsRoute,
  getUsersUserIdRoute,
  getUsersUserIdTeamsRoute,
  putUsersUserIdRoute,
} from '../routes'

export const getUsersRouteHandler: RouteHandler<typeof getUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersLookupRouteHandler: RouteHandler<typeof getUsersLookupRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersSearchRouteHandler: RouteHandler<typeof getUsersSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdRouteHandler: RouteHandler<typeof getUsersUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putUsersUserIdRouteHandler: RouteHandler<typeof putUsersUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdOrgsRouteHandler: RouteHandler<typeof getUsersUserIdOrgsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUsersUserIdTeamsRouteHandler: RouteHandler<
  typeof getUsersUserIdTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
