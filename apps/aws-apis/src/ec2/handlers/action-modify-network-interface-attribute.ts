import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyNetworkInterfaceAttributeRoute,
  postActionModifyNetworkInterfaceAttributeRoute,
} from '../routes'

export const getActionModifyNetworkInterfaceAttributeRouteHandler: RouteHandler<
  typeof getActionModifyNetworkInterfaceAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyNetworkInterfaceAttributeRouteHandler: RouteHandler<
  typeof postActionModifyNetworkInterfaceAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
