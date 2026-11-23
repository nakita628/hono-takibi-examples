import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDetachNetworkInterfaceRoute,
  postActionDetachNetworkInterfaceRoute,
} from '../routes'

export const getActionDetachNetworkInterfaceRouteHandler: RouteHandler<
  typeof getActionDetachNetworkInterfaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDetachNetworkInterfaceRouteHandler: RouteHandler<
  typeof postActionDetachNetworkInterfaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
