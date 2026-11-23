import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAuthorizationRoute,
  postAuthorizationDeviceCodeRoute,
  postAuthorizationDeviceRoute,
  postAuthorizationProfileRoute,
  postAuthorizationRefreshRoute,
  postAuthorizationRoute,
  postAuthorizationSsoRoute,
} from '../routes'

export const deleteAuthorizationRouteHandler: RouteHandler<
  typeof deleteAuthorizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthorizationRouteHandler: RouteHandler<typeof postAuthorizationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAuthorizationDeviceRouteHandler: RouteHandler<
  typeof postAuthorizationDeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthorizationDeviceCodeRouteHandler: RouteHandler<
  typeof postAuthorizationDeviceCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthorizationProfileRouteHandler: RouteHandler<
  typeof postAuthorizationProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthorizationRefreshRouteHandler: RouteHandler<
  typeof postAuthorizationRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthorizationSsoRouteHandler: RouteHandler<
  typeof postAuthorizationSsoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
