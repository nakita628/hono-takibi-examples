import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionTagMFADeviceRoute, postActionTagMFADeviceRoute } from '../routes'

export const getActionTagMFADeviceRouteHandler: RouteHandler<
  typeof getActionTagMFADeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionTagMFADeviceRouteHandler: RouteHandler<
  typeof postActionTagMFADeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
