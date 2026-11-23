import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNotificationsNewRoute,
  getNotificationsRoute,
  getNotificationsThreadsIdRoute,
  patchNotificationsThreadsIdRoute,
  putNotificationsRoute,
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

export const getNotificationsNewRouteHandler: RouteHandler<
  typeof getNotificationsNewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNotificationsThreadsIdRouteHandler: RouteHandler<
  typeof getNotificationsThreadsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchNotificationsThreadsIdRouteHandler: RouteHandler<
  typeof patchNotificationsThreadsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
