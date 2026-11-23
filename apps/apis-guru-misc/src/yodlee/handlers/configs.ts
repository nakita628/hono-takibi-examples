import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteConfigsNotificationsEventsEventNameRoute,
  getConfigsNotificationsEventsRoute,
  getConfigsPublicKeyRoute,
  postConfigsNotificationsEventsEventNameRoute,
  putConfigsNotificationsEventsEventNameRoute,
} from '../routes'

export const getConfigsNotificationsEventsRouteHandler: RouteHandler<
  typeof getConfigsNotificationsEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteConfigsNotificationsEventsEventNameRouteHandler: RouteHandler<
  typeof deleteConfigsNotificationsEventsEventNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConfigsNotificationsEventsEventNameRouteHandler: RouteHandler<
  typeof postConfigsNotificationsEventsEventNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putConfigsNotificationsEventsEventNameRouteHandler: RouteHandler<
  typeof putConfigsNotificationsEventsEventNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConfigsPublicKeyRouteHandler: RouteHandler<
  typeof getConfigsPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
