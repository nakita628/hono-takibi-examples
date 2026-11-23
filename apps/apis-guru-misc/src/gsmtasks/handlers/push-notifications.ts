import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePushNotificationsIdIndexRoute,
  getPushNotificationsIdIndexRoute,
  getPushNotificationsIndexRoute,
  patchPushNotificationsIdIndexRoute,
  postPushNotificationsIdResendIndexRoute,
  postPushNotificationsIndexRoute,
  putPushNotificationsIdIndexRoute,
} from '../routes'

export const getPushNotificationsIndexRouteHandler: RouteHandler<
  typeof getPushNotificationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPushNotificationsIndexRouteHandler: RouteHandler<
  typeof postPushNotificationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePushNotificationsIdIndexRouteHandler: RouteHandler<
  typeof deletePushNotificationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPushNotificationsIdIndexRouteHandler: RouteHandler<
  typeof getPushNotificationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPushNotificationsIdIndexRouteHandler: RouteHandler<
  typeof patchPushNotificationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPushNotificationsIdIndexRouteHandler: RouteHandler<
  typeof putPushNotificationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPushNotificationsIdResendIndexRouteHandler: RouteHandler<
  typeof postPushNotificationsIdResendIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
