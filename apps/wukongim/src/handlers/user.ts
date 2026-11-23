import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUserSystemuidsRoute,
  postUserDeviceQuitRoute,
  postUserOnlinestatusRoute,
  postUserSystemuidsAddRoute,
  postUserSystemuidsAddToCacheRoute,
  postUserSystemuidsRemoveFromCacheRoute,
  postUserSystemuidsRemoveRoute,
  postUserTokenRoute,
  postUserUpdatePluginNoRoute,
} from '../routes'

export const postUserTokenRouteHandler: RouteHandler<typeof postUserTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserDeviceQuitRouteHandler: RouteHandler<typeof postUserDeviceQuitRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUserOnlinestatusRouteHandler: RouteHandler<
  typeof postUserOnlinestatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserSystemuidsRouteHandler: RouteHandler<typeof getUserSystemuidsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUserSystemuidsAddRouteHandler: RouteHandler<
  typeof postUserSystemuidsAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserSystemuidsRemoveRouteHandler: RouteHandler<
  typeof postUserSystemuidsRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserSystemuidsAddToCacheRouteHandler: RouteHandler<
  typeof postUserSystemuidsAddToCacheRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserSystemuidsRemoveFromCacheRouteHandler: RouteHandler<
  typeof postUserSystemuidsRemoveFromCacheRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUserUpdatePluginNoRouteHandler: RouteHandler<
  typeof postUserUpdatePluginNoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
