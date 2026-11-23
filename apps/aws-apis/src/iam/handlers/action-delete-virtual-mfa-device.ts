import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteVirtualMFADeviceRoute,
  postActionDeleteVirtualMFADeviceRoute,
} from '../routes'

export const getActionDeleteVirtualMFADeviceRouteHandler: RouteHandler<
  typeof getActionDeleteVirtualMFADeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteVirtualMFADeviceRouteHandler: RouteHandler<
  typeof postActionDeleteVirtualMFADeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
