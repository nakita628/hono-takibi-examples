import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionEnableMFADeviceRoute, postActionEnableMFADeviceRoute } from '../routes'

export const getActionEnableMFADeviceRouteHandler: RouteHandler<
  typeof getActionEnableMFADeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionEnableMFADeviceRouteHandler: RouteHandler<
  typeof postActionEnableMFADeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
