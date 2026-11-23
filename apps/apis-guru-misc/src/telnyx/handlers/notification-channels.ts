import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteNotificationChannelsIdRoute,
  getNotificationChannelsIdRoute,
  getNotificationChannelsRoute,
  patchNotificationChannelsIdRoute,
  postNotificationChannelsRoute,
} from '../routes'

export const getNotificationChannelsRouteHandler: RouteHandler<
  typeof getNotificationChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNotificationChannelsRouteHandler: RouteHandler<
  typeof postNotificationChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNotificationChannelsIdRouteHandler: RouteHandler<
  typeof deleteNotificationChannelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNotificationChannelsIdRouteHandler: RouteHandler<
  typeof getNotificationChannelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchNotificationChannelsIdRouteHandler: RouteHandler<
  typeof patchNotificationChannelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
