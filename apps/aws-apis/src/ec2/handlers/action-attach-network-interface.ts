import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAttachNetworkInterfaceRoute,
  postActionAttachNetworkInterfaceRoute,
} from '../routes'

export const getActionAttachNetworkInterfaceRouteHandler: RouteHandler<
  typeof getActionAttachNetworkInterfaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAttachNetworkInterfaceRouteHandler: RouteHandler<
  typeof postActionAttachNetworkInterfaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
