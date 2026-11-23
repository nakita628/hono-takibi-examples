import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAssignPrivateIpAddressesRoute,
  postActionAssignPrivateIpAddressesRoute,
} from '../routes'

export const getActionAssignPrivateIpAddressesRouteHandler: RouteHandler<
  typeof getActionAssignPrivateIpAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAssignPrivateIpAddressesRouteHandler: RouteHandler<
  typeof postActionAssignPrivateIpAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
