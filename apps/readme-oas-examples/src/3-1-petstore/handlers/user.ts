import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUserUsernameRoute,
  getUserLoginRoute,
  getUserLogoutRoute,
  getUserUsernameRoute,
  postUserCreateWithArrayRoute,
  postUserCreateWithListRoute,
  postUserRoute,
  putUserUsernameRoute,
} from '../routes'

export const postUserRouteHandler: RouteHandler<typeof postUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserCreateWithArrayRouteHandler: RouteHandler<
  typeof postUserCreateWithArrayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserCreateWithListRouteHandler: RouteHandler<
  typeof postUserCreateWithListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserLoginRouteHandler: RouteHandler<typeof getUserLoginRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserLogoutRouteHandler: RouteHandler<typeof getUserLogoutRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserUsernameRouteHandler: RouteHandler<typeof getUserUsernameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserUsernameRouteHandler: RouteHandler<typeof putUserUsernameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserUsernameRouteHandler: RouteHandler<typeof deleteUserUsernameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
