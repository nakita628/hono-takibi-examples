import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUnassignPrivateIpAddressesRoute,
  postActionUnassignPrivateIpAddressesRoute,
} from '../routes'

export const getActionUnassignPrivateIpAddressesRouteHandler: RouteHandler<
  typeof getActionUnassignPrivateIpAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUnassignPrivateIpAddressesRouteHandler: RouteHandler<
  typeof postActionUnassignPrivateIpAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
