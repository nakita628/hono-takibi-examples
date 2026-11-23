import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSessionsSessionIdRoute,
  getSessionsSessionIdRoute,
  getSessionsSessionIdViewsRoute,
  postSessionsSessionIdViewsRoute,
} from '../routes'

export const deleteSessionsSessionIdRouteHandler: RouteHandler<
  typeof deleteSessionsSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSessionsSessionIdRouteHandler: RouteHandler<
  typeof getSessionsSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSessionsSessionIdViewsRouteHandler: RouteHandler<
  typeof getSessionsSessionIdViewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSessionsSessionIdViewsRouteHandler: RouteHandler<
  typeof postSessionsSessionIdViewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
