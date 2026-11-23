import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteNotificationsIdRoute,
  deleteNotificationsRoute,
  getNotificationsIdRoute,
  getNotificationsRoute,
  putNotificationsIdRoute,
  putNotificationsRoute,
} from '../routes'

export const deleteNotificationsRouteHandler: RouteHandler<
  typeof deleteNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNotificationsRouteHandler: RouteHandler<typeof getNotificationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putNotificationsRouteHandler: RouteHandler<typeof putNotificationsRoute> = async (
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

export const putNotificationsIdRouteHandler: RouteHandler<typeof putNotificationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
