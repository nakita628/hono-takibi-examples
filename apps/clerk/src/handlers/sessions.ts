import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSessionsRoute,
  postSessionsRoute,
  getSessionsSessionIdRoute,
  patchSessionsSessionIdRoute,
  postSessionsSessionIdRefreshRoute,
  getSessionsSessionIdReverificationsReverificationIdRoute,
  postSessionsSessionIdRevokeRoute,
  postSessionsSessionIdTokensRoute,
  postSessionsSessionIdTokensTemplateNameRoute,
} from '../routes'

export const getSessionsRouteHandler: RouteHandler<typeof getSessionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSessionsRouteHandler: RouteHandler<typeof postSessionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSessionsSessionIdRouteHandler: RouteHandler<
  typeof getSessionsSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSessionsSessionIdRouteHandler: RouteHandler<
  typeof patchSessionsSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSessionsSessionIdRefreshRouteHandler: RouteHandler<
  typeof postSessionsSessionIdRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSessionsSessionIdReverificationsReverificationIdRouteHandler: RouteHandler<
  typeof getSessionsSessionIdReverificationsReverificationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSessionsSessionIdRevokeRouteHandler: RouteHandler<
  typeof postSessionsSessionIdRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSessionsSessionIdTokensRouteHandler: RouteHandler<
  typeof postSessionsSessionIdTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSessionsSessionIdTokensTemplateNameRouteHandler: RouteHandler<
  typeof postSessionsSessionIdTokensTemplateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
