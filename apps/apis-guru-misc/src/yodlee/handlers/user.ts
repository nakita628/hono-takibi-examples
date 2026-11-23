import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUserUnregisterRoute,
  getUserAccessTokensRoute,
  getUserRoute,
  postUserLogoutRoute,
  postUserRegisterRoute,
  postUserSamlLoginRoute,
  putUserRoute,
} from '../routes'

export const getUserRouteHandler: RouteHandler<typeof getUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserRouteHandler: RouteHandler<typeof putUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserAccessTokensRouteHandler: RouteHandler<
  typeof getUserAccessTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserLogoutRouteHandler: RouteHandler<typeof postUserLogoutRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserRegisterRouteHandler: RouteHandler<typeof postUserRegisterRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUserSamlLoginRouteHandler: RouteHandler<typeof postUserSamlLoginRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteUserUnregisterRouteHandler: RouteHandler<
  typeof deleteUserUnregisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
