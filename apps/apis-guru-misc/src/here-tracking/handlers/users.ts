import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUsersV2DevicesRoute,
  getUsersV2HealthRoute,
  getUsersV2VersionRoute,
  postUsersV2LoginRoute,
  postUsersV2RefreshRoute,
  postUsersV2TokenExchangeRoute,
} from '../routes'

export const getUsersV2DevicesRouteHandler: RouteHandler<typeof getUsersV2DevicesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUsersV2HealthRouteHandler: RouteHandler<typeof getUsersV2HealthRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUsersV2LoginRouteHandler: RouteHandler<typeof postUsersV2LoginRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUsersV2RefreshRouteHandler: RouteHandler<typeof postUsersV2RefreshRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUsersV2TokenExchangeRouteHandler: RouteHandler<
  typeof postUsersV2TokenExchangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersV2VersionRouteHandler: RouteHandler<typeof getUsersV2VersionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
