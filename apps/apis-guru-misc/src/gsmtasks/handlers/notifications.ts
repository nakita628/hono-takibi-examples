import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNotificationsIdIndexRoute,
  getNotificationsIndexRoute,
  postNotificationsIndexRoute,
} from '../routes'

export const getNotificationsIndexRouteHandler: RouteHandler<
  typeof getNotificationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNotificationsIndexRouteHandler: RouteHandler<
  typeof postNotificationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNotificationsIdIndexRouteHandler: RouteHandler<
  typeof getNotificationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
