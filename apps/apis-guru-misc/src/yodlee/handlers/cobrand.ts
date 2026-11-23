import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCobrandConfigNotificationsEventsEventNameRoute,
  getCobrandConfigNotificationsEventsRoute,
  getCobrandPublicKeyRoute,
  postCobrandConfigNotificationsEventsEventNameRoute,
  postCobrandLoginRoute,
  postCobrandLogoutRoute,
  putCobrandConfigNotificationsEventsEventNameRoute,
} from '../routes'

export const getCobrandConfigNotificationsEventsRouteHandler: RouteHandler<
  typeof getCobrandConfigNotificationsEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCobrandConfigNotificationsEventsEventNameRouteHandler: RouteHandler<
  typeof deleteCobrandConfigNotificationsEventsEventNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCobrandConfigNotificationsEventsEventNameRouteHandler: RouteHandler<
  typeof postCobrandConfigNotificationsEventsEventNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCobrandConfigNotificationsEventsEventNameRouteHandler: RouteHandler<
  typeof putCobrandConfigNotificationsEventsEventNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCobrandLoginRouteHandler: RouteHandler<typeof postCobrandLoginRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postCobrandLogoutRouteHandler: RouteHandler<typeof postCobrandLogoutRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCobrandPublicKeyRouteHandler: RouteHandler<
  typeof getCobrandPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
