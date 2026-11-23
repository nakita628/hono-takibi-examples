import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteNotificationsThreadsThreadIdRoute,
  deleteNotificationsThreadsThreadIdSubscriptionRoute,
  getNotificationsRoute,
  getNotificationsThreadsThreadIdRoute,
  getNotificationsThreadsThreadIdSubscriptionRoute,
  patchNotificationsThreadsThreadIdRoute,
  putNotificationsRoute,
  putNotificationsThreadsThreadIdSubscriptionRoute,
} from '../routes'

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

export const getNotificationsThreadsThreadIdRouteHandler: RouteHandler<
  typeof getNotificationsThreadsThreadIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchNotificationsThreadsThreadIdRouteHandler: RouteHandler<
  typeof patchNotificationsThreadsThreadIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNotificationsThreadsThreadIdRouteHandler: RouteHandler<
  typeof deleteNotificationsThreadsThreadIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNotificationsThreadsThreadIdSubscriptionRouteHandler: RouteHandler<
  typeof getNotificationsThreadsThreadIdSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNotificationsThreadsThreadIdSubscriptionRouteHandler: RouteHandler<
  typeof putNotificationsThreadsThreadIdSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNotificationsThreadsThreadIdSubscriptionRouteHandler: RouteHandler<
  typeof deleteNotificationsThreadsThreadIdSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
