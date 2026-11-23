import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListMFADeviceTagsRoute, postActionListMFADeviceTagsRoute } from '../routes'

export const getActionListMFADeviceTagsRouteHandler: RouteHandler<
  typeof getActionListMFADeviceTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListMFADeviceTagsRouteHandler: RouteHandler<
  typeof postActionListMFADeviceTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
