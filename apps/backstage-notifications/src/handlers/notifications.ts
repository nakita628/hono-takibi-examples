import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNotificationsIdRoute,
  getNotificationsRoute,
  postNotificationsRoute,
  postNotificationsUpdateRoute,
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

export const postNotificationsUpdateRouteHandler: RouteHandler<
  typeof postNotificationsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNotificationsIdRouteHandler: RouteHandler<typeof getNotificationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
