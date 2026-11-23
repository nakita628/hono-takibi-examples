import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getQuickConnectConnectRoute,
  getQuickConnectInitiateRoute,
  getQuickConnectStatusRoute,
  postQuickConnectActivateRoute,
  postQuickConnectAuthorizeRoute,
  postQuickConnectAvailableRoute,
  postQuickConnectDeauthorizeRoute,
} from '../routes'

export const postQuickConnectActivateRouteHandler: RouteHandler<
  typeof postQuickConnectActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postQuickConnectAuthorizeRouteHandler: RouteHandler<
  typeof postQuickConnectAuthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postQuickConnectAvailableRouteHandler: RouteHandler<
  typeof postQuickConnectAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuickConnectConnectRouteHandler: RouteHandler<
  typeof getQuickConnectConnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postQuickConnectDeauthorizeRouteHandler: RouteHandler<
  typeof postQuickConnectDeauthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuickConnectInitiateRouteHandler: RouteHandler<
  typeof getQuickConnectInitiateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuickConnectStatusRouteHandler: RouteHandler<
  typeof getQuickConnectStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
