import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSessionsIdRoute,
  deleteSessionsRoute,
  getSessionsRoute,
  postSessionsIdLockRoute,
  postSessionsRoute,
  putSessionsIdRoute,
} from '../routes'

export const deleteSessionsRouteHandler: RouteHandler<typeof deleteSessionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSessionsRouteHandler: RouteHandler<typeof getSessionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSessionsRouteHandler: RouteHandler<typeof postSessionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSessionsIdRouteHandler: RouteHandler<typeof deleteSessionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putSessionsIdRouteHandler: RouteHandler<typeof putSessionsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSessionsIdLockRouteHandler: RouteHandler<typeof postSessionsIdLockRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
