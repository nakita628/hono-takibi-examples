import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNotificationsServicesRoute,
  getNotificationsTypesRoute,
  getNotificationsUserIdRoute,
  getNotificationsUserIdSummaryRoute,
  postNotificationsAdminRoute,
  postNotificationsUserIdReadRoute,
  postNotificationsUserIdUnreadRoute,
} from '../routes'

export const postNotificationsAdminRouteHandler: RouteHandler<
  typeof postNotificationsAdminRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNotificationsServicesRouteHandler: RouteHandler<
  typeof getNotificationsServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNotificationsTypesRouteHandler: RouteHandler<
  typeof getNotificationsTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNotificationsUserIdRouteHandler: RouteHandler<
  typeof getNotificationsUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNotificationsUserIdReadRouteHandler: RouteHandler<
  typeof postNotificationsUserIdReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNotificationsUserIdSummaryRouteHandler: RouteHandler<
  typeof getNotificationsUserIdSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNotificationsUserIdUnreadRouteHandler: RouteHandler<
  typeof postNotificationsUserIdUnreadRoute
> = async (c) => {
  throw new Error('Not implemented')
}
