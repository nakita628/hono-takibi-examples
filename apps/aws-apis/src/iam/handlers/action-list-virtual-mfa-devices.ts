import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListVirtualMFADevicesRoute,
  postActionListVirtualMFADevicesRoute,
} from '../routes'

export const getActionListVirtualMFADevicesRouteHandler: RouteHandler<
  typeof getActionListVirtualMFADevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListVirtualMFADevicesRouteHandler: RouteHandler<
  typeof postActionListVirtualMFADevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
