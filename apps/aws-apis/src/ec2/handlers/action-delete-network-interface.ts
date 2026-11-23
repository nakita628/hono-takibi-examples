import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteNetworkInterfaceRoute,
  postActionDeleteNetworkInterfaceRoute,
} from '../routes'

export const getActionDeleteNetworkInterfaceRouteHandler: RouteHandler<
  typeof getActionDeleteNetworkInterfaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteNetworkInterfaceRouteHandler: RouteHandler<
  typeof postActionDeleteNetworkInterfaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
