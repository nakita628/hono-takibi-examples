import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getQuickConnectConnectRoute,
  getQuickConnectEnabledRoute,
  postQuickConnectAuthorizeRoute,
  postQuickConnectInitiateRoute,
} from '../routes'

export const postQuickConnectAuthorizeRouteHandler: RouteHandler<
  typeof postQuickConnectAuthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuickConnectConnectRouteHandler: RouteHandler<
  typeof getQuickConnectConnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuickConnectEnabledRouteHandler: RouteHandler<
  typeof getQuickConnectEnabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postQuickConnectInitiateRouteHandler: RouteHandler<
  typeof postQuickConnectInitiateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
