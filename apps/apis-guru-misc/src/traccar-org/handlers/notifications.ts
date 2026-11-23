import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteNotificationsIdRoute,
  getNotificationsRoute,
  getNotificationsTypesRoute,
  postNotificationsRoute,
  postNotificationsTestRoute,
  putNotificationsIdRoute,
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

export const postNotificationsTestRouteHandler: RouteHandler<
  typeof postNotificationsTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNotificationsTypesRouteHandler: RouteHandler<
  typeof getNotificationsTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNotificationsIdRouteHandler: RouteHandler<
  typeof deleteNotificationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNotificationsIdRouteHandler: RouteHandler<typeof putNotificationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
