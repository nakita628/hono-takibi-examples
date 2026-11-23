import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateVirtualMFADeviceRoute,
  postActionCreateVirtualMFADeviceRoute,
} from '../routes'

export const getActionCreateVirtualMFADeviceRouteHandler: RouteHandler<
  typeof getActionCreateVirtualMFADeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateVirtualMFADeviceRouteHandler: RouteHandler<
  typeof postActionCreateVirtualMFADeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
