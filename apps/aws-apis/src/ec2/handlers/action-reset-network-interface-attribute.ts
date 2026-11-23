import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionResetNetworkInterfaceAttributeRoute,
  postActionResetNetworkInterfaceAttributeRoute,
} from '../routes'

export const getActionResetNetworkInterfaceAttributeRouteHandler: RouteHandler<
  typeof getActionResetNetworkInterfaceAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionResetNetworkInterfaceAttributeRouteHandler: RouteHandler<
  typeof postActionResetNetworkInterfaceAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
