import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionResyncMFADeviceRoute, postActionResyncMFADeviceRoute } from '../routes'

export const getActionResyncMFADeviceRouteHandler: RouteHandler<
  typeof getActionResyncMFADeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionResyncMFADeviceRouteHandler: RouteHandler<
  typeof postActionResyncMFADeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
