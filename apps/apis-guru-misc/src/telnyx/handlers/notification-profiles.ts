import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteNotificationProfilesIdRoute,
  getNotificationProfilesIdRoute,
  getNotificationProfilesRoute,
  patchNotificationProfilesIdRoute,
  postNotificationProfilesRoute,
} from '../routes'

export const getNotificationProfilesRouteHandler: RouteHandler<
  typeof getNotificationProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNotificationProfilesRouteHandler: RouteHandler<
  typeof postNotificationProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNotificationProfilesIdRouteHandler: RouteHandler<
  typeof deleteNotificationProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNotificationProfilesIdRouteHandler: RouteHandler<
  typeof getNotificationProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchNotificationProfilesIdRouteHandler: RouteHandler<
  typeof patchNotificationProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
