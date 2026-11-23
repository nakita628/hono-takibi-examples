import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteNetworkInterfacePermissionRoute,
  postActionDeleteNetworkInterfacePermissionRoute,
} from '../routes'

export const getActionDeleteNetworkInterfacePermissionRouteHandler: RouteHandler<
  typeof getActionDeleteNetworkInterfacePermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteNetworkInterfacePermissionRouteHandler: RouteHandler<
  typeof postActionDeleteNetworkInterfacePermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
