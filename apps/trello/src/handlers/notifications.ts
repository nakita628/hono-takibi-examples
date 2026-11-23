import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNotificationsIdBoardRoute,
  getNotificationsIdCardRoute,
  getNotificationsIdFieldRoute,
  getNotificationsIdListRoute,
  getNotificationsIdMemberCreatorRoute,
  getNotificationsIdMemberRoute,
  getNotificationsIdOrganizationRoute,
  getNotificationsIdRoute,
  postNotificationsAllReadRoute,
  putNotificationsIdRoute,
  putNotificationsIdUnreadRoute,
} from '../routes'

export const getNotificationsIdRouteHandler: RouteHandler<typeof getNotificationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putNotificationsIdRouteHandler: RouteHandler<typeof putNotificationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getNotificationsIdFieldRouteHandler: RouteHandler<
  typeof getNotificationsIdFieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNotificationsAllReadRouteHandler: RouteHandler<
  typeof postNotificationsAllReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNotificationsIdUnreadRouteHandler: RouteHandler<
  typeof putNotificationsIdUnreadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNotificationsIdBoardRouteHandler: RouteHandler<
  typeof getNotificationsIdBoardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNotificationsIdCardRouteHandler: RouteHandler<
  typeof getNotificationsIdCardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNotificationsIdListRouteHandler: RouteHandler<
  typeof getNotificationsIdListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNotificationsIdMemberRouteHandler: RouteHandler<
  typeof getNotificationsIdMemberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNotificationsIdMemberCreatorRouteHandler: RouteHandler<
  typeof getNotificationsIdMemberCreatorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNotificationsIdOrganizationRouteHandler: RouteHandler<
  typeof getNotificationsIdOrganizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
