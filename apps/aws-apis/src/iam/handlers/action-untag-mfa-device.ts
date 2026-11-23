import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionUntagMFADeviceRoute, postActionUntagMFADeviceRoute } from '../routes'

export const getActionUntagMFADeviceRouteHandler: RouteHandler<
  typeof getActionUntagMFADeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUntagMFADeviceRouteHandler: RouteHandler<
  typeof postActionUntagMFADeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
