import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateNetworkInterfacePermissionRoute,
  postActionCreateNetworkInterfacePermissionRoute,
} from '../routes'

export const getActionCreateNetworkInterfacePermissionRouteHandler: RouteHandler<
  typeof getActionCreateNetworkInterfacePermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateNetworkInterfacePermissionRouteHandler: RouteHandler<
  typeof postActionCreateNetworkInterfacePermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
