import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBundleNotificationsIdRoute,
  getBundleNotificationsIdRoute,
  getBundleNotificationsRoute,
  patchBundleNotificationsIdRoute,
  postBundleNotificationsRoute,
} from '../routes'

export const getBundleNotificationsRouteHandler: RouteHandler<
  typeof getBundleNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBundleNotificationsRouteHandler: RouteHandler<
  typeof postBundleNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBundleNotificationsIdRouteHandler: RouteHandler<
  typeof deleteBundleNotificationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBundleNotificationsIdRouteHandler: RouteHandler<
  typeof getBundleNotificationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchBundleNotificationsIdRouteHandler: RouteHandler<
  typeof patchBundleNotificationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
