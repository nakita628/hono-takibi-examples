import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAuthRoute,
  deleteAuthSessionIdRoute,
  getAuthAppRoute,
  getAuthRoute,
  getAuthSessionsRoute,
  getAuthTotpRoute,
  postAuthRoute,
} from '../routes'

export const getAuthRouteHandler: RouteHandler<typeof getAuthRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthRouteHandler: RouteHandler<typeof postAuthRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthRouteHandler: RouteHandler<typeof deleteAuthRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthSessionIdRouteHandler: RouteHandler<
  typeof deleteAuthSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthSessionsRouteHandler: RouteHandler<typeof getAuthSessionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthTotpRouteHandler: RouteHandler<typeof getAuthTotpRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthAppRouteHandler: RouteHandler<typeof getAuthAppRoute> = async (c) => {
  throw new Error('Not implemented')
}
