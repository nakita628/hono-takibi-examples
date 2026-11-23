import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListMFADevicesRoute, postActionListMFADevicesRoute } from '../routes'

export const getActionListMFADevicesRouteHandler: RouteHandler<
  typeof getActionListMFADevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListMFADevicesRouteHandler: RouteHandler<
  typeof postActionListMFADevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
