import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeactivateMFADeviceRoute,
  postActionDeactivateMFADeviceRoute,
} from '../routes'

export const getActionDeactivateMFADeviceRouteHandler: RouteHandler<
  typeof getActionDeactivateMFADeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeactivateMFADeviceRouteHandler: RouteHandler<
  typeof postActionDeactivateMFADeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
