import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteNotificationsIdRoute,
  getNotificationsIdRoute,
  getNotificationsRoute,
  patchNotificationsIdRoute,
  postNotificationsRoute,
} from '../routes'

export const getNotificationsRouteHandler: RouteHandler<typeof getNotificationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postNotificationsRouteHandler: RouteHandler<typeof postNotificationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteNotificationsIdRouteHandler: RouteHandler<
  typeof deleteNotificationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNotificationsIdRouteHandler: RouteHandler<typeof getNotificationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchNotificationsIdRouteHandler: RouteHandler<
  typeof patchNotificationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
