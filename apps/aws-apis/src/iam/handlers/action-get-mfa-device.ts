import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetMFADeviceRoute, postActionGetMFADeviceRoute } from '../routes'

export const getActionGetMFADeviceRouteHandler: RouteHandler<
  typeof getActionGetMFADeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetMFADeviceRouteHandler: RouteHandler<
  typeof postActionGetMFADeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
